<script setup>
import { ref } from 'vue'

const city = ref('')
const emit = defineEmits(['search'])

function submitSearch() {
  if (!city.value) return
  emit('search', city.value)
  city.value = '' 
}
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-3 mb-6">
  <input
    v-model="city"
    @keyup.enter="submitSearch"
    type="text"
    placeholder="Search city..."
    class="flex-1 px-5 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
  />
  <button
    @click="submitSearch"
    class="w-full sm:w-auto px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 font-semibold shadow-lg transition-colors">
    Search
  </button>
</div>

</template>
