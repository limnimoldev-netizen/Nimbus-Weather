<script>
import WeatherCard from '@/components/WeatherCard.vue';
</script>
<template>
  <WeatherCard/>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="bg-blue-500 text-white rounded-xl p-6 w-full max-w-sm shadow-lg">
    <h2 class="text-2xl font-bold mb-2">Phnom Penh</h2>

    <p class="text-lg">🌡 Temperature: <span class="font-semibold">32°C</span></p>
    <p class="text-lg">☁ Condition: <span class="font-semibold">Sunny</span></p>

    <p class="text-sm mt-4 opacity-80">Updated just now</p>
  </div>
</div>

</template>