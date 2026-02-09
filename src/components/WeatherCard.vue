<script setup>
const props = defineProps({
  title: String,
  value: [String, Number],
  unit: String,
  icon: String
})
</script>

<template>
  <div class="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center w-36 sm:w-40 text-center backdrop-blur-md shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition-transform duration-300">
    <div class="text-3xl mb-2">{{ icon }}</div>
    <p class="text-sm font-bold text-blue-200 mb-1">{{ title }}</p>
    <p class="text-xl font-black">
      {{ value }}
      <span class="opacity-50 ml-1">{{ unit }}</span>
    </p>
  </div>
</template>
