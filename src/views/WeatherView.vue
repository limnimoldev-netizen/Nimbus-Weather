<script setup>
import { ref, onMounted } from 'vue'
import WeatherCard from '@/components/WeatherCard.vue'
import ForecastCard from '@/components/ForecastCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import MapView from '@/components/MapView.vue'

// Default city
const city = ref('Phnom Penh')

// Reactive state
const weather = ref(null)
const forecast = ref([])
const loading = ref(false)
const error = ref('')

// Fetch current weather from RapidAPI
async function fetchWeather(cityName) {
  loading.value = true
  error.value = ''

  const url = `https://weather-api167.p.rapidapi.com/api/weather/current?city=${cityName}`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'weather-api167.p.rapidapi.com'
    }
  }

  try {
    const res = await fetch(url, options)
    const data = await res.json()
    console.log('API data:', data) // Debug API response

    if (data.error) {
      error.value = data.error.message || 'Something went wrong'
      weather.value = null
    } else {
      // Use fallback values with ??
      weather.value = {
        city: cityName,
        temp: data.temperature ?? 0,
        condition: data.weather_descriptions?.[0] ?? 'Unknown',
        humidity: data.humidity ?? 0,
        wind: data.wind_speed ?? 0,
        icon: data.weather_icons?.[0] ?? '🌤️',
        lat: data.latitude ?? 11.5564,
        lon: data.longitude ?? 104.9282
      }
    }
  } catch (err) {
    error.value = 'API fetch error'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const forecastHourly = ref([])

function loadHourlyForecast() {
  forecastHourly.value = [
    { time: 'Now', icon: '☀️', temp: 34 },
    { time: '10 AM', icon: '🌦️', temp: 35 },
    { time: '12 PM', icon: '🌤️', temp: 36 },
    { time: '2 PM', icon: '🌤️', temp: 35 },
    { time: '4 PM', icon: '⛅', temp: 33 },
    { time: '6 PM', icon: '🌦️', temp: 31 },
    { time: '8 PM', icon: '🌙', temp: 29 }
  ]
}

onMounted(() => {
  fetchWeather(city.value)
  loadForecast()
  loadHourlyForecast()
})


function loadForecast() {
  forecast.value = [
    { day: 'Mon', icon: '☀️', max: 34, min: 24 },
    { day: 'Tue', icon: '🌤️', max: 33, min: 23 },
    { day: 'Wed', icon: '🌧️', max: 30, min: 22 },
    { day: 'Thu', icon: '⛅', max: 31, min: 23 },
    { day: 'Fri', icon: '🌩️', max: 29, min: 21 },
    { day: 'Sat', icon: '☀️', max: 34, min: 24 },
    { day: 'Sun', icon: '🌤️', max: 32, min: 22 },
    { day: 'Mon', icon: '🌦️', max: 31, min: 23 },
    { day: 'Tue', icon: '☀️', max: 35, min: 25 },
    { day: 'Wed', icon: '⛅', max: 33, min: 24 }
  ]
}




// Handle search from SearchBar
function handleSearch(cityName) {
  city.value = cityName
  fetchWeather(cityName)
  loadForecast()
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-950 text-white font-sans p-4 sm:p-6 md:p-10">
   
    <div class="max-w-6xl mx-auto">

      <header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 w-full">
        
          <div class="text-left md:text-right w-full md:w-auto">
            <p class="text-xs sm:text-sm md:text-base text-indigo-300 uppercase tracking-widest mb-1 sm:mb-2">
               {{ timeOfDay }}
            </p>
            <h2 class="text-xl sm:text-xl md:text-5xl font-extrabold text-white drop-shadow-md leading-tight">
              {{ city }}
            </h2>
            <p class="text-[2px] sm:text-xs font-bold text-indigo-200 uppercase tracking-widest mt-1 sm:mt-2">
              Live Weather  {{ todayDate }}
            </p>
          </div>

          <div class="flex items-center gap-3 sm:gap-4 mt-3 md:mt-0 w-full md:w-auto justify-start md:justify-end">
            <span class="text-4xl sm:text-5xl md:text-[80px] drop-shadow-2xl flex-shrink-0">
              {{ weather?.icon ?? '🌤️' }}
            </span>
            <div class="flex flex-col">
              <p class="text-lg sm:text-xl md:text-2xl font-bold">
                {{ weather?.temp ?? '--' }}°C
              </p>
              <p v-if="loading" class="text-indigo-200/50 text-xs sm:text-sm mt-1">
                Loading...
              </p>
            </div>
          </div>
      </header>

      <main class="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8">

        <section class="col-span-12 lg:col-span-8 bg-gradient-to-br from-indigo-800/40 to-blue-900/30 backdrop-blur-3xl border border-indigo-400/20 rounded-4xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-xl">
          
          <div class="relative z-10 flex flex-col md:flex-row justify-between h-full gap-4 sm:gap-6 md:gap-10">

                <div class="flex flex-col w-full md:w-auto">
                  <span class="bg-indigo-900/30 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm md:text-sm font-extrabold uppercase tracking-widest text-indigo-200">
                    Today's Sky
                  </span>

                  <div class="mt-4 sm:mt-6 md:mt-8">
                    <div class="flex items-baseline gap-1 sm:gap-2 md:gap-2">
                      <span class="text-[70px] sm:text-[90px] md:text-[120px] font-black leading-none tracking-tighter text-white">
                        {{ weather?.temp ?? '--' }}°
                      </span>
                      <span class="text-2xl sm:text-3xl md:text-5xl font-light text-white/70">C</span>
                    </div>

                    <p v-if="loading" class="text-indigo-200/50 mt-1 sm:mt-2">Loading...</p>

                    <p class="text-indigo-100/50 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-6 mt-1 sm:mt-2 md:mt-2">
                      A great day for a walk in the park.
                    </p>

                    <SearchBar @search="handleSearch" />
                  
                  </div>

                </div>

            
                <div class="flex flex-col items-center justify-center text-[90px] sm:text-[120px] md:text-[160px] drop-shadow-2xl text-white flex-shrink-0 mt-4 md:mt-0">{{ weather?.icon ?? '' }}</div>

          </div>

          
          <div class="absolute -top-16 -right-16 w-40 sm:w-52 h-40 sm:h-52 bg-indigo-700/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-16 -left-8 w-64 sm:w-80 h-64 sm:h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
       
        </section>

        
        <section class="col-span-12 lg:col-span-4">
      
            <h3 class="text-sm sm:text-base md:text-base font-extrabold text-indigo-400 uppercase tracking-widest mb-2 sm:mb-4">Today</h3>


            <div class="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-indigo-500/50 scrollbar-track-indigo-900/20">
              
                <div
                  
                    v-for="h in forecastHourly"
                    :key="h.time"
                    class="min-w-[60px] sm:min-w-[70px] md:min-w-[90px] flex-shrink-0 
                          bg-gradient-to-b from-indigo-800/30 to-indigo-700/20 
                          backdrop-blur-md border border-indigo-400/20
                          rounded-3xl p-2 sm:p-3 md:p-4 flex flex-col items-center text-center
                          hover:bg-indigo-900/40 transition-all duration-300">
                  
                    <span class="text-[9px] sm:text-[10px] md:text-[12px] font-semibold text-indigo-200 mb-1">{{ h.time }}</span>

                    <span class="text-xl sm:text-2xl md:text-3xl mb-1">{{ h.icon }}</span>
                    <span class="text-lg sm:text-xl md:text-xl font-black text-white">{{ h.temp }}°</span>
                  
                </div>

            </div>

        </section>



        <div class="col-span-12">

            <h3 class="text-xs sm:text-sm md:text-sm font-bold text-indigo-400 mb-4 sm:mb-6 md:mb-6 ml-2 sm:ml-4 uppercase tracking-widest">Atmosphere Details</h3>
            
            <div class="flex flex-wrap gap-3 sm:gap-6">
              <WeatherCard title="Humidity" :value="weather?.humidity ?? '--'" unit="%" icon="💧" />
              <WeatherCard title="Wind " :value="weather?.wind ?? '--'" unit="km/h" icon="💨" />
              <WeatherCard title="UV Index" value="4" unit="Mid" icon="☀️" />
              <WeatherCard title="Real Feel" value="34" unit="°C" icon="🌡" />
              <WeatherCard title="Visibility" value="10" unit="km" icon="🛰️" />
              <WeatherCard title="Sunset" value="6:45" unit="PM" icon="🌅" />
            </div>
        
          </div>



        <section class="col-span-12 lg:col-span-8">
          
          <MapView v-if="weather" :city="weather.city" :lat="weather.lat" :lon="weather.lon" />
        </section>

          <section class="col-span-12 lg:col-span-4 bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-400/20 rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-md shadow-xl">
          
            <h3 class="text-sm sm:text-base md:text-sm font-extrabold text-indigo-400 uppercase tracking-widest mb-2">7-Day Forecast</h3>
            
            <span class="text-xs sm:text-sm md:text-xs text-indigo-200 font-semibold italic mb-4 sm:mb-6 md:mb-6 block">Next 7 Days</span>

            <div class="flex flex-col gap-2 sm:gap-4">
              
                <ForecastCard
                  v-for="day in forecast.slice(0, 7)"  
                  :key="day.day"
                  :day="day.day"
                  :icon="day.icon"
                  :maxTemp="day.max"
                  :minTemp="day.min"
                />
            
            
            </div>
          
          </section>

        

          <div class="col-span-12   flex flex-col items-center border-t border-white/10 pt-6  sm:pb-8 md:pb-10">
            
            <p class="mb-4 sm:mb-6 md:mb-6 text-xs sm:text-sm uppercase tracking-[0.2em]">Ready to explore another city?</p>
            
            <router-link to="/search" class="group flex items-center gap-3 sm:gap-4 bg-white/5 hover:bg-blue-600 backdrop-blur-md border border-white/10 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-2xl sm:rounded-[2rem] transition-all duration-500 shadow-2xl hover:shadow-blue-500/40">
            
              <span class="font-black text-sm sm:text-lg md:text-xl tracking-tight">Change Location</span>
              <span class="ml-1 sm:ml-2 opacity-0 group-hover:opacity-100 transition-opacity">➜</span>
          
            </router-link>
          </div>

      </main>

    </div>

  </div>
</template>
