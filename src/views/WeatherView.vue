<script setup>
import WeatherCard from '@/components/WeatherCard.vue'
import ForecastCard from '@/components/ForecastCard.vue'

const weeklyForecast = [
  { day: 'Mon', icon: '☀️', max: 34, min: 24 },
  { day: 'Tue', icon: '🌤', max: 32, min: 22 },
  { day: 'Wed', icon: '🌧', max: 30, min: 21 },
  { day: 'Thu', icon: '⛅️', max: 31, min: 23 },
  { day: 'Fri', icon: '🌩', max: 29, min: 20 },
  { day: 'Sat', icon: '☀️', max: 33, min: 24 },
  { day: 'Sun', icon: '🌤', max: 32, min: 22 },
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-950 text-white font-sans p-4 md:p-10">
    <div class="max-w-6xl mx-auto">
      
      <header class="flex justify-between items-center mb-10">
        
        <div class="text-right">
          <p class="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Live Weather</p>
          <h2 class="text-xl font-black">Phnom Penh, KH</h2>
        </div>
      </header>

      <main class="grid grid-cols-12 gap-8">
        
        <section class="col-span-12 lg:col-span-8 bg-gradient-to-br from-blue-500/40 to-indigo-600/40 backdrop-blur-3xl border border-white/20 rounded-[3.5rem] p-10 relative overflow-hidden shadow-2xl">
          <div class="relative z-10 flex flex-col md:flex-row justify-between h-full">
            <div>
              <span class="bg-white/10 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Today's Sky</span>
              <div class="mt-8">
                <span class="text-[120px] font-black leading-none tracking-tighter">32°</span>
                <span class="text-4xl opacity-50 font-light">c</span>
                <p class="text-2xl font-medium mt-2">Partly Sunny</p>
                <p class="text-blue-100/50 text-sm">A great day for a walk in the park.</p>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center text-[160px] drop-shadow-2xl ">⛅️</div>
          </div>
        </section>

        <section class="col-span-12 lg:col-span-4 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
          <h3 class="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">Coming Up</h3>
          <div class="space-y-6">
            <div v-for="d in ['Tue', 'Wed', 'Thu', 'Fri']" :key="d" class="flex justify-between items-center border-b border-white/5 pb-2 hover:translate-x-1 transition-transform cursor-default">
              <span class="text-slate-400 font-bold">{{ d }}</span>
              <span class="text-xl">☀️</span>
              <span class="font-black text-lg">33° <small class="opacity-30 font-normal">24°</small></span>
            </div>
          </div>
        </section>

        <div class="col-span-12">
          <h3 class="text-xs font-bold text-slate-500  mb-6 ml-4">Atmosphere Details</h3>
          <div class="flex flex-wrap gap-6">
            <WeatherCard title="Real Feel" value="34" unit="°c" icon="🌡" />
            <WeatherCard title="Wind Speed" value="12" unit="km/h" icon="💨" />
            <WeatherCard title="Humidity" value="82" unit="%" icon="💧" />
            <WeatherCard title="UV Index" value="4" unit="Mid" icon="☀️" />
          </div>
        </div>




        <section class="col-span-12 lg:col-span-4 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl shadow-2xl">
            <div class="flex items-center justify-between mb-8">
            <h3 class="text-xs font-bold text-blue-400 uppercase tracking-[0.3em]">7-Day Forecast</h3>
            <span class="text-[10px] text-slate-500 font-bold uppercase italic">Next Week</span>
            </div>

            <div class="flex flex-col gap-3">

            <ForecastCard 
                v-for="forecast in weeklyForecast" 
                :key="forecast.day"
                :day="forecast.day"
                :icon="forecast.icon"
                :maxTemp="forecast.max"
                :minTemp="forecast.min"
            />
            </div>
        </section>
        
        <div class="col-span-12 mt-12 flex flex-col items-center border-t border-white/10 pt-10 pb-10">
          <p class=" mb-6 text-xs uppercase tracking-[0.2em]">Ready to explore another city?</p>
          <router-link to="/search" class="group flex items-center gap-4 bg-white/5 hover:bg-blue-600 backdrop-blur-md border border-white/10 px-10 py-5 rounded-[2rem] transition-all duration-500 shadow-2xl hover:shadow-blue-500/40">
            <span class="text-2xl group-hover:rotate-12 transition-transform">📍</span>
            <span class="font-black text-xl tracking-tight">Change Location</span>
            <span class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">➜</span>
          </router-link>
        </div>

      </main>

         
    </div>
  </div>
</template>
