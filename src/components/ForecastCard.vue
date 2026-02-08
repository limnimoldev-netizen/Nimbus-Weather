<script setup>
const props = defineProps({
  day: String,
  icon: String,
  maxTemp: Number,
  minTemp: Number
})
</script>

<template>
  <div
    class="flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-md hover:scale-105 transition-transform"
  >
    <div class="flex flex-col">
      <p class="text-sm font-bold text-blue-200">{{ day }}</p>
      <p class="text-xl md:text-2xl font-black text-white mt-1">{{ icon }}</p>
    </div>
    <div class="text-right">
      <p class="text-sm text-white/70">Max: {{ maxTemp }}°</p>
      <p class="text-sm text-white/70">Min: {{ minTemp }}°</p>
    </div>
  </div>
</template>
