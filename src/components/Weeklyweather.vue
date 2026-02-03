<script setup>
defineProps({
  forecast: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">

    <div
      v-for="day in forecast"
      :key="day.name"
      class="bg-white/20 backdrop-blur-lg rounded-xl p-4 text-center shadow hover:scale-105 transition"
    >
      <p class="font-semibold mb-2">{{ day.name }}</p>

      <img
        :src="day.icon"
        class="mx-auto w-12 h-12"
      />

      <p class="text-sm mt-2">{{ day.desc }}</p>

      <p class="text-sm font-medium mt-1">
        {{ day.max }}° / {{ day.min }}°
      </p>
    </div>

  </div>
</template>
