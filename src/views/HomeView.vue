<script setup>
import { ref } from 'vue'

// Sample data
const trendingCities = ref([
  { name: 'Phnom Penh', icon: '🌤️', temp: 34 },
  { name: 'London', icon: '🌧️', temp: 18 },
  { name: 'Dubai', icon: '☀️', temp: 40 },
  { name: 'Tokyo', icon: '🌦️', temp: 25 },
  { name: 'Paris', icon: '🌤️', temp: 22 }
])

const weatherTips = ref([
  'Perfect day to water your plants ',
  'Great for an evening walk ',
  'Carry an umbrella just in case of afternoon showers ',
  'UV Index high, wear sunscreen '
])

const seasonalHighlights = ref([
  { title: 'Hottest City', icon: '🔥', value: 'Dubai 40°C' },
  { title: 'Rainiest City', icon: '🌧️', value: 'London 18°C' },
  { title: 'Sunniest City', icon: '☀️', value: 'Los Angeles 35°C' },
  { title: 'Coldest City', icon: '❄️', value: 'Moscow -5°C' }
])

const timeOfDay = ref('Good Morning')
const todayDate = ref(new Date().toLocaleDateString())
</script>



<template>
 
    <div class="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-950 text-white font-sans p-4 sm:p-6 md:p-10">
        <div class="max-w-6xl mx-auto">

          <header class="relative w-full h-[400px] sm:h-[500px] md:h-[600px] mb-10 rounded-3xl overflow-hidden">
            
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-950"></div>
            <div class="absolute top-10 left-0 w-[200px] h-[80px] bg-white/20 rounded-full animate-clouds"></div>    
            <div class="absolute top-32 left-[-100px] w-[150px] h-[60px] bg-white/20 rounded-full animate-clouds delay-2000"></div>
            
            <div class="absolute top-20 right-[-120px] w-[180px] h-[70px] bg-white/25 rounded-full animate-clouds delay-4000"></div>

            <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center h-full p-6 sm:p-10">
              
              <div class="w-full md:w-auto text-left md:text-left">
              
              
                <p class="text-xs sm:text-sm md:text-base text-indigo-300 uppercase tracking-widest mb-1 sm:mb-2">
                  {{ timeOfDay }}
                </p>
              
              
                <h1 class="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                  Welcome to Nimbus Home
                </h1>
                
                <p class="text-[9px] sm:text-xs md:text-sm text-indigo-200 uppercase tracking-widest mt-1 sm:mt-2">
                  Explore the world • {{ todayDate }}
              
                </p>

              </div>

              <div class="flex items-center gap-4 mt-3 md:mt-0 w-full md:w-auto justify-start md:justify-end">
              
                <span class="text-5xl sm:text-6xl md:text-[100px] drop-shadow-2xl flex-shrink-0">🌤️</span>
              
              
                <div class="flex flex-col">
                  
                  <p class="text-xl sm:text-2xl md:text-3xl font-bold">--°C</p>
                  
                  
                  <p class="text-indigo-200/50 text-xs sm:text-sm mt-1">Current Temp</p>
                
                
                </div>
              
              </div>

            </div>
          </header>


          <main class="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8">

            <section class="col-span-12 mb-6">
              
              <h3 class="text-sm sm:text-base md:text-base font-extrabold text-indigo-400 uppercase tracking-widest mb-2 sm:mb-4">Trending Cities</h3>
              
              <div class="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-indigo-500/50 scrollbar-track-indigo-900/20">
              
              
                <div v-for="city in trendingCities" :key="city.name" class="min-w-[80px] sm:min-w-[90px] md:min-w-[110px] flex-shrink-0 bg-indigo-800/30 backdrop-blur-md border border-indigo-400/20 
                
                rounded-3xl p-3 flex flex-col items-center text-center hover:bg-indigo-900/40 transition-all duration-300 cursor-pointer">
                  
                <span class="text-2xl sm:text-3xl md:text-4xl mb-1">{{ city.icon }}</span>
                
                  <span class="text-xs sm:text-sm md:text-base font-semibold text-indigo-200">{{ city.name }}</span>
                  <span class="text-sm sm:text-base md:text-lg font-black text-white">{{ city.temp }}°C</span>
                
                
                </div>
              
              
              </div>

            </section>

            <section class="col-span-12 lg:col-span-6 mb-6 bg-indigo-800/20 backdrop-blur-md border border-indigo-400/20 rounded-3xl p-4 sm:p-6 md:p- shadow-lg">
              
              <h3 class="text-sm sm:text-base md:text-sm font-extrabold text-indigo-300 uppercase tracking-widest mb-4">Daily Weather Tips</h3>
              
              <div class="flex flex-col gap-2 sm:gap-3">
            
                <p v-for="tip in weatherTips" :key="tip" class="text-sm sm:text-base text-indigo-100/80">• {{ tip }}</p>
              
              </div>
          
            </section>

            <section class="col-span-12 lg:col-span-6 mb-6">
              
              <h3 class="text-sm sm:text-base md:text-sm font-extrabold text-indigo-400 uppercase tracking-widest mb-2 sm:mb-4">Seasonal Highlights</h3>
              
              <div class="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-indigo-500/50 scrollbar-track-indigo-900/20">
                
                <div v-for="item in seasonalHighlights" :key="item.title" class="min-w-[100px]  bg-blue-900/20 backdrop-blur-md border border-blue-400/20 rounded-3xl p-3 flex flex-col items-center text-center hover:bg-blue-800/40 transition-all duration-300">
                  
                  
                  <span class="text-2xl sm:text-3xl md:text-4xl mb-1">{{ item.icon }}</span>
                  <span class="text-xs sm:text-sm md:text-base font-semibold text-indigo-200">{{ item.title }}</span>
                
                  <span class="text-sm sm:text-base md:text-lg font-black text-white">{{ item.value }}</span>
                
                </div>
              
              </div>

            </section>

          </main>

        
        </div>

      <section class="col-span-12 flex flex-col items-center  backdrop-blur-md  rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
        
        <h3 class="text-lg sm:text-xl md:text-2xl font-extrabold text-indigo-300 uppercase tracking-widest mb-4">Start Exploring</h3>
        <p class="text-sm sm:text-base text-indigo-200 mb-6 text-center">Discover the weather in your city and get useful tips to stay prepared.</p>
        
        <router-link to="/weather" class="group flex items-center gap-4 bg-white/5 hover:bg-blue-600 backdrop-blur-md border border-white/10 px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-2xl sm:rounded-[2rem] transition-all duration-500 shadow-2xl hover:shadow-blue-500/40">
          
          
          <span class="font-black text-sm sm:text-lg md:text-xl tracking-tight">Check Weather Now</span>
          <span class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">➜</span>
        
        </router-link>

      </section>


    </div>

</template>




<style>
@keyframes moveClouds {
  0% { transform: translateX(-200px); }
  100% { transform: translateX(100vw); }
}

.animate-clouds {
  animation: moveClouds 30s linear infinite;
}
.delay-2000 { animation-delay: 2s; }
.delay-4000 { animation-delay: 4s; }
</style>
