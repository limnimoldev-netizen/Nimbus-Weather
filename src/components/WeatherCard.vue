<script setup>
// This tells Vue what data to expect from the Parent (WeatherView.vue)
defineProps({
  title: String,
  value: [String, Number],

  unit: String,
  icon: String,
  
})
</script>




<template>
  <div class="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[2rem] flex-1 min-w-[200px] hover:bg-white/20 transition-all shadow-lg">
    
    <div class="flex items-center justify-center w-14 h-14 bg-blue-500/20 rounded-2xl text-2xl">{{ icon }}</div>

    <div class="flex flex-col">

        <span class="text-[10px] font-bold uppercase tracking-widest text-blue-200/50 mb-1">{{ title }}</span>
        
        <div class="flex items-baseline gap-1">

          <span class="text-2xl font-black text-white leading-none">{{ value }}</span>

          <span class="text-xs font-medium text-blue-100/60">{{ unit }}</span>


        </div>
    </div>

  </div>




  
</template>

