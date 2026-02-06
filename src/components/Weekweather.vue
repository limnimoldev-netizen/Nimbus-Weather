<template>
  <div class="flex gap-10 overflow-x-auto px-2 py-2 justify-center">
    <button
      v-for="(day, index) in forecast"
      :key="index"
      :class="[
        'flex flex-col items-center justify-center gap-1 rounded-2xl px-4 py-3 min-w-[70px] cursor-pointer transition-all transform',
        day.active
          ? 'hover:bg-gray-700 hover:scale-105 bg-white/8'
          : ' text-white hover:bg-gray-700 hover:scale-105 bg-white/8'
      ]"
    >
      <span class="text-sm font-semibold">{{ day.name }}</span>
      <img
        :src="day.iconSrc"
        :alt="day.iconAlt"
        class="w-10 h-10 object-contain"
      />
      <span class="text-sm font-medium">{{ day.temp }}<sup>°</sup></span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  forecast: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
/* Smooth scroll hide scrollbar for mobile */
div::-webkit-scrollbar {
  display: none;
}
</style>
