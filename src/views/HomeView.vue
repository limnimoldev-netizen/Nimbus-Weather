<script setup>
import { ref } from 'vue'

const city = ref('Phnom Penh')
</script>


<template>


  <section class="bg-gradient-to-r from-[#31255a] to-[#4a3c8c] text-white">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 class="text-4xl md:text-5xl font-bold max-w-2xl mb-4">
  {{ city }} Weather Forecast
</h1>

     <p class="text-lg text-slate-200 max-w-2xl mx-auto mb-4">
  Get real-time weather updates, temperature, humidity, and conditions
  for {{ city }}.
</p>

       <BR></BR><BR></BR>
      <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl  mb-4">
        <input
          type="text"
          placeholder="Search city (Phnom Penh)"
          class="w-full sm:w-120 px-4 py-3 rounded-lg text-[#d1d5db] focus:outline-none border "
        />
        <button
          class="px-6 py-3 rounded-lg font-medium
                 bg-white text-[#31255a]
                 hover:bg-[#75b4e3] hover:text-[#31255a]
                 transition"
        >
          Find Weather
        </button>
      </div>
    </div>
  </section>


  <section class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 class="text-3xl font-bold text-center text-[#31255a] mb-10">
      What You Can See
    </h2>

    <BR></BR>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-xl shadow">
        <h3 class="text-[#333333] font-roboto mb-2"> Temperature</h3>
        <p class="text-gray-600">
          See current temperature in Celsius for each city in Cambodia.
        </p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow">
        <h3 class="text-[#333333] font-roboto mb-2"> Weather Condition</h3>
        <p class="text-gray-600">
          Know if the weather is sunny, cloudy, rainy, or stormy.
        </p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow">
        <h3 class="text-[#333333] font-roboto mb-2"> Humidity</h3>
        <p class="text-gray-600">
          Check humidity level to plan your day better.
        </p>
      </div>
    </div>
  </section>


  <section class="bg-slate-100 py-16">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-[#333333] font-roboto text-[#31255a] mb-8">
        Today in Phnom Penh
      </h2>

      <div class="bg-black max-w-md mx-auto rounded-xl shadow p-6">
        <p class="text-lg"> 30 °C</p>
        <p class="capitalize"> clear sky</p>
        <p> Humidity: 60%</p>
      </div>
    </div>
  </section>

</template>
