<script setup>
defineProps({
  day: String,
  icon: String,
  maxTemp: [Number, String],
  minTemp: [Number, String]
})
</script>


<template>
  <div class="flex items-center justify-between p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-default">
    <div class="w-12">
      <p class="text-sm font-bold text-slate-400 group-hover:text-blue-300 transition-colors">{{ day }}</p>
    </div>

    <div class="text-2xl group-hover:scale-125 transition-transform duration-500">
      {{ icon }}
    </div>

    <div class="flex items-center gap-3">
        
      <span class="text-lg font-black text-white">{{ maxTemp }}°</span>
      <span class="text-sm font-medium text-slate-500">{{ minTemp }}°</span>
    </div>
  </div>

</template>

