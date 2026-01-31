<script setup>
/*
Props we receive from parent
forecast = array of 7 days weather
*/
defineProps({
  forecast: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div
    class="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-white"
  >
    <h2 class="text-xl font-semibold mb-4">
      7-Day Forecast
    </h2>
    <BR></BR>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4"
    >
      <div
        v-for="(day, index) in forecast"
        :key="index"
        class=""
      >
        <!-- Day -->
        <p class="font-medium mb-2">
          {{ day.name }}
        </p>

        <!-- Icon -->
        <img
          :src="day.icon"
          class="w-12 h-12 mx-auto"
        />

        <!-- Temp -->
        <p class="mt-2 font-semibold">
          {{ day.max }}° / {{ day.min }}°
        </p>

        <!-- Description -->
        <p class="text-xs text-slate-200 mt-1">
          {{ day.desc }}
        </p>
      </div>
    </div>
  </div>
</template>
