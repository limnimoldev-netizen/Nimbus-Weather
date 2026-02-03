
<script setup>
import Weeklyweather from '@/components/Weeklyweather.vue';
const today = {
  temp: 31,
  max: 33,
  min: 25,
  desc: 'Sunny',
  icon: 'https://openweathermap.org/img/wn/01d.png'
}

const forecast = [
  { name: 'Mon', icon: 'https://openweathermap.org/img/wn/10d.png', max: 32, min: 25, desc: 'Sunny' },
  { name: 'Tue', icon: 'https://openweathermap.org/img/wn/02d.png', max: 30, min: 24, desc: 'Cloudy' },
  { name: 'Wed', icon: 'https://openweathermap.org/img/wn/10d.png', max: 29, min: 23, desc: 'Rain' },
  { name: 'Thu', icon: 'https://openweathermap.org/img/wn/01d.png', max: 33, min: 26, desc: 'Clear' },
  { name: 'Fri', icon: 'https://openweathermap.org/img/wn/03d.png', max: 31, min: 25, desc: 'Clouds' },
  { name: 'Sat', icon: 'https://openweathermap.org/img/wn/10d.png', max: 28, min: 23, desc: 'Rainy' },
  { name: 'Sun', icon: 'https://openweathermap.org/img/wn/04d.png', max: 30, min: 24, desc: 'Overcast' }
]
</script>




<template>
  <main max-w-[1280px] mx-auto py-0 px-22>
  <div class=" max-w-[1280px] mx-auto display: flex; flex-direction: column; flex-wrap: wrap;">
  <div class="  h-100 bg-red-100 mx-auto ">

  </div>
  

  </div>

  </main>
  <RouterView />
</template>

  <!-- HERO -->
  <section class=" min-h-screen bg-gradient-to-r from-[#31255a] to-[#4a3c8c] text-[333333] bg-[url('https://openweathermap.org//payload/api/media/file/clouds_bg.jpg')]">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center ">
    
      <h1 class="text-white md:text-5xl font-bold mb-4">
        Smarter Weather <br> for Everything You Build
      </h1>
      <p class="text-lg text-slate-200  mx-auto mb-4">
        From real-time forecasts to 45+ years of global climate history grade weather <br> data for developers, analysts, and businesses worldwide.
      </p>
      <BR></BR><BR></BR>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="text"
          placeholder="Enter City ..."
          class="w-full sm:w-120 px-4 py-3 rounded-lg text-white focus:outline-none border"
        />
        <button
          class="px-6 py-3 rounded-2xl font-medium
                 bg-white text-[#31255a]
                 hover:bg-[#75b4e3] hover:text-[#31255a]
                 transition"
        >
          Find Weather
        </button>
      </div>
      <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20  ">
    <Weeklyweather :forecast="forecast" />
  </div>
      
    </div>
  </section>

  <!-- INFO SECTION -->
  <section class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 class="text-3xl font-bold text-center text-[#31255a] mb-10">
      Information
    </h2>
      
  </section>

  <!-- SAMPLE WEATHER -->
  <section class="bg-slate-100 py-16">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold text-[#31255a] mb-8">
        Today in Phnom Penh
      </h2>

      <div class="bg-white max-w-md mx-auto rounded-xl shadow p-6">
        <p class="text-lg">🌡 30 °C</p>
        <p class="capitalize">☀️ clear sky</p>
        <p>💧 Humidity: 60%</p>
      </div>
    </div>
  </section>


  </template>
