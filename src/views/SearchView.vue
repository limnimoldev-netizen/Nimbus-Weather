<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const city = ref('')
const country = ref('Cambodia')

const recentCities = ref(['Phnom Penh', 'Siem Reap'])

// Navigate to weather page with selected city
function goToWeather(selectedCity) {
  if (!selectedCity) return
  router.push({ path: '/weather', query: { city: selectedCity } })
}

// Handle search input
function submitSearch() {
  if (!city.value) return
  goToWeather(city.value)
  city.value = '' // clear input after search
}

const cityName = 'Phnom Penh'

fetch(`https://weather-api167.p.rapidapi.com/api/weather/current?city=${cityName}`, {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'weather-api167.p.rapidapi.com'
  }
})
  .then(res => res.json())
  .then(data => console.log('Weather API Response:', data))
  .catch(err => console.error('API Error:', err))


// Handle "use my location"
function useCurrentLocation() {
  if (!navigator.geolocation) return alert('Geolocation not supported')
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      // Pass lat/lon to weather page
      router.push({ path: '/weather', query: { lat, lon } })
    },
    (err) => alert('Failed to get location')
  )
}
</script>

<template>
  
  <div class="min-h-screen bg-[#0f172a] bg-cover bg-center bg-blend-overlay flex items-center justify-center p-4">
    
    <div class="w-full max-w-xl bg-white/10 backdrop-blur-2xl border border-white/20 p-8 md:p-10 rounded-[2rem] shadow-2xl">


      <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">Select Your Location</h1>
        <p class="text-blue-200/60 text-sm md:text-base mt-2">Discover weather around the world</p>
      </div>


      <div class="space-y-4 md:space-y-6">

        
        <div>
        
          <label class="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">Choose Country</label>
          <select v-model="country" class="w-full bg-slate-900/80 text-white p-4 md:p-5 rounded-2xl border border-white/10 outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
            
            <option>Cambodia</option>
            <option>United States</option>
           
            <option>United Kingdom</option>
          
          </select>
        
        </div>



        <div>
         
          <label class="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">Enter City</label>
          
            <div class="relative">
            
              <input
            
                v-model="city"
                @keyup.enter="submitSearch"
                type="text"
                placeholder="Type city name..."
                class="w-full bg-slate-900/80 text-white p-4 md:p-5 pr-28 rounded-2xl border border-white/10 outline-none focus:ring-2 focus:ring-blue-500"
              />
          
              <button
                
                @click="submitSearch"
                class="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 px-5 md:px-6 rounded-xl
                font-bold text-white transition-all active:scale-95 shadow-lg shadow-blue-600/30">Search
                
              </button>
       
              
            </div>
        
        </div>



        <button
          @click="useCurrentLocation"
          class="w-full flex items-center justify-center gap-2 text-blue-300 hover:text-white transition-colors text-sm md:text-base font-semibold">
          
          <span> Use my current location</span>
        </button>
      </div>


      <div class="mt-8 pt-6 border-t border-white/5">
        
        <p class="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Recent Searches</p>
        
        <div class="flex flex-wrap gap-2">
         
          <button
            v-for="c in recentCities"
            :key="c"
            @click="goToWeather(c)"
            class="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs md:text-sm hover:bg-blue-600 transition">{{ c }}
         
          </button>
        
        </div>
     
      </div>

    </div>
  
  </div>
  
</template>

