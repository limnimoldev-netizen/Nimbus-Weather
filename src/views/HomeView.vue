
<script setup>
import Weekweather from '@/components/Weekweather.vue'
import { ref } from 'vue'
import Weathertoday from '@/components/Weathertoday.vue'

// Use **OpenWeather icons links**, no need to download
const weeklyForecast = [
  { name: 'Mon', temp: 26, iconSrc: 'https://openweathermap.org/img/wn/10n.png', iconAlt: 'clear sky', active: true },
  { name: 'Tue', temp: 27, iconSrc: 'https://openweathermap.org/img/wn/02d.png', iconAlt: 'few clouds', active: false },
  { name: 'Wed', temp: 25, iconSrc: 'https://openweathermap.org/img/wn/10d.png', iconAlt: 'rain', active: false },
  { name: 'Thu', temp: 24, iconSrc: 'https://openweathermap.org/img/wn/04d.png', iconAlt: 'broken clouds', active: false },
  { name: 'Fri', temp: 28, iconSrc: 'https://openweathermap.org/img/wn/	11n.png', iconAlt: 'clear sky', active: false },
  { name: 'Sat', temp: 26, iconSrc: 'https://openweathermap.org/img/wn/09d.png', iconAlt: 'shower rain', active: false },
  { name: 'Sun', temp: 27, iconSrc: 'https://openweathermap.org/img/wn/13d.png', iconAlt: 'snow', active: false },

]
const stats = ref([
  { label: 'Wind', value: '18 m/s', icon: '💨' },
  { label: 'Humidity', value: '87%', icon: '💧' },
  { label: 'Visibility', value: '10km', icon: '👁' },
  { label: 'Pressure', value: '995', icon: '📉' },
  { label: 'UV Index', value: '0', icon: '☀️' },
  { label: 'Dew Point', value: '6°', icon: '🌡' }
])

const hourly = ref([
  { time: '3 PM', temp: 8, chance: '0%', icon: '🌙' },
  { time: '4 PM', temp: 8, chance: '0%', icon: '☁️' },
  { time: '5 PM', temp: 8, chance: '0%', icon: '☁️' },
  { time: '6 PM', temp: 8, chance: '10%', icon: '🌦' },
  { time: '7 PM', temp: 7, chance: '20%', icon: '🌧' },
  
])

</script>


<template>


  <!-- HERO -->
   
  <section class="bg-gradient-to-r from-[#31255a] to-[#4a3c8c] text-white bg-[url('@/assets/clouds_bg.jpg')]">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center ">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Smarter Weather for <BR></BR> Everything You Build
      </h1>
      <p class="text-lg text-slate-200 max-w-2xl mx-auto mb-8">
       From real-time forecasts to 45+ years of global climate history grade <BR></BR>weather data for developers, analysts, and businesses worldwide.
      </p>

      <BR></BR>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="text"
          placeholder="Search city (Phnom Penh)"
          class="w-full sm:w-120 px-4 py-3 rounded-2xl text-[#D3D3D3] focus:outline-none border"
        />
        <button
          class="px-6 py-3 rounded-xl font-medium
                 bg-white text-[#31255a]
                 hover:bg-[#75b4e3] hover:text-[#31255a]
                 transition"
        >
          Find Weather
        </button>
      </div>

      <BR></BR>

      <!-- weekly  -->
<div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center mx-auto ">
    <h1 class="text-white text-2xl font-semibold mb-4">Weekly Forecast</h1><BR></BR>
    <Weekweather :forecast="weeklyForecast" />
  </div>



  <div class="min-h-screen p-6 ml-10 mb-100">

    <Weathertoday
      city="Cambodia"
      :temp="25"
      condition="Overcast"
      :feelsLike="4"
      :statsData="stats"
      :hourlyData="hourly"
    />
    

  </div>

  
       
    </div>
  </section>
</template>
