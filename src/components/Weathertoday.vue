<script setup>
defineProps({
  city: String,
  temp: Number,
  condition: String,
  feelsLike: Number,
  statsData: Array,
  hourlyData: Array,
  bgImage: {
    type: String,
    default:
      'https://images.unsplash.com/photo-1534088568595-a066f7104211?auto=format&fit=crop&q=80&w=1000'
  }
})
</script>



<template>
  <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 text-[#31255a] ml">

    <!-- LEFT SIDE -->
    <div class="lg:col-span-4 space-y-6">

      <!-- Main Card -->
      <div class="relative h-80 rounded-[40px] overflow-hidden shadow-2xl group  bg-[url('https://i.pinimg.com/736x/83/c1/eb/83c1ebda7dfa7aca607c6a58c75d7beb.jpg')] ">
        

        <div class="absolute inset-0  from-[#31255a]/30 to-[#31255a]/90 p-8 flex flex-col justify-between text-white">

          <div class="flex justify-between items-start">
            <span class="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-2xl text-xs font-bold uppercase tracking-widest">
              {{ city }}
            </span>

            <button class="bg-[#31255a] text-white px-5 py-2 rounded-xl text-xs font-bold shadow-sm">
              LIVE
            </button>
          </div>

          <div class="flex justify-between items-end">
            <div class="text-7xl font-bold text-[#31255a]">{{ temp }}°</div>

            <div class="text-right">
              <p class="text-xl font-bold">{{ condition }}</p>
              <p class="text-sm opacity-80">Feels like {{ feelsLike }}°</p>
            </div>
          </div>

        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-3">
        <div
          v-for="stat in statsData"
          :key="stat.label"
          class="bg-white/8 p-4 rounded-3xl flex flex-col items-center justify-center gap-1 shadow-sm text-[#ffffff]"
        >
          <span class="text-xl">{{ stat.icon }}</span>
          <span class="text-[10px] uppercase text-stone-400">{{ stat.label }}</span>
          <span class="text-sm font-bold">{{ stat.value }}</span>
        </div>
      </div>
    </div>


    <!-- RIGHT SIDE -->

    <div class="lg:col-span-8  rounded-[40px] p-01 shadow-sm mx-auto text-[#ffffff] ">

      <h2 class="text-2xl font-black mb-8">Hourly Forecast</h2>

      <div class="flex gap-4 overflow-x-auto ">

        <div
          v-for="hour in hourlyData"
          :key="hour.time"
          class="min-w-[110px] bg-[#31255a] p-6 rounded-[35px] flex flex-col items-center shadow-sm hover:bg-white/8 hover:scale-100 "
        >
          <span class="text-xs font-bold text-stone-400">{{ hour.time }}</span>
          <span class="text-3xl my-3">{{ hour.icon }}</span>
          <span class="text-white text-[#]">{{ hour.chance }}</span>
          <span class="text-white font-bold">{{ hour.temp }}°</span>
        </div>

      </div>

      <!-- location -->
 
      <div class="relative w-full h-76 mt-5 rounded-[35px] overflow-hidden bg-[url('https://i.pinimg.com/1200x/f4/b1/46/f4b1462e52bcbb1fbeb332d7e3e03b39.jpg')] bg-cover bg-center">
  
  <iframe
    class="absolute inset-0 w-full h-full border-0"
    src="https://www.google.com/maps/embed?pb=..."
    loading="lazy">
  </iframe>

</div>


    </div>

  </div>
</template>

