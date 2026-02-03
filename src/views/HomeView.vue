<script setup>
import WeeklyWeather from '@/components/WeeklyWeather.vue'

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
  <main class="max-w-[1280px] mx-auto">

    <!-- HERO -->
    <section class="min-h-screen bg-gradient-to-r from-[#31255a] to-[#4a3c8c] text-white">
      <div class="px-6 py-20 text-center">

        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Smarter Weather <br /> for Everything You Build
        </h1>

        <p class="text-slate-200 mb-8">
          Real-time forecasts for developers and businesses
        </p>

        <!-- Search -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <input
            type="text"
            placeholder="Enter City ..."
            class="px-4 py-3 rounded-lg bg-white/20 border border-white/40 text-white"
          />
          <button
            class="px-6 py-3 rounded-xl bg-white text-[#31255a] hover:bg-[#75b4e3] transition"
          >
            Find Weather
          </button>
        </div>

        <!-- Weekly Weather -->
        <WeeklyWeather :forecast="forecast" />

      </div>
    </section>

    <!-- TODAY CARD -->
    <section class="bg-slate-100 py-16 text-center">
      <h2 class="text-3xl font-bold text-[#31255a] mb-8">
        Today in Phnom Penh
      </h2>

      <div class="bg-white max-w-md mx-auto rounded-xl shadow-lg p-6">
        <p class="text-xl font-semibold">🌡 30°C</p>
        <p class="capitalize">☀️ clear sky</p>
        <p>💧 Humidity: 60%</p>
      </div>
    </section>

  </main>
</template>
