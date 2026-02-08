<script setup>
import ForecastCard from './ForecastCard.vue'

const props = defineProps({
  forecast: {
    type: Array,
    default: () => []
  },
})
</script>

<template>
  <section class="flex flex-col gap-3  mt-12">
    <ForecastCard
      v-for="day in forecast.slice(0, 7)"  
      :key="day.day"
      :day="day.day"
      :icon="day.icon"
      :maxTemp="day.max"
      :minTemp="day.min"
    />
  </section>
</template>
