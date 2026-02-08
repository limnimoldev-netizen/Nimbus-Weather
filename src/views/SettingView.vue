<script setup>
// Props allow the parent to tell this component which unit is active
defineProps(['modelValue']); 
// Emits allow this child to tell the parent when a button was clicked
const emit = defineEmits(['update:modelValue']);
</script>

<template>
  
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="@/assets/wind-bg.mp4" type="video/mp4" />
    </video>

    <div class="absolute inset-0 bg-white/60 dark:bg-black/40 backdrop-blur-sm"></div>

    <div class="relative z-10 flex flex-col md:flex-row min-h-screen text-slate-900 dark:text-slate-100">
      
      <div class="md:hidden flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10">
        <h1 class="text-xl font-semibold">☁ Atmosphere</h1>
        <button class="p-2 bg-black/5 rounded-lg cursor-pointer">☰</button>
      </div>

      <aside class="hidden md:block w-64 p-6 border-r border-black/10 dark:border-white/10">
        <h1 class="text-3xl font-semibold mb-8 flex items-center gap-2 mt-10 pb-6">
          ☁ Atmosphere
        </h1>
        <nav class="space-y-4 text-sm">
          <a class="block font-semibold cursor-pointer bg-black/5 dark:bg-white/10 p-3 rounded-lg">Settings</a>
        </nav>
      </aside>

      <main class="flex-1 p-6 md:p-10 overflow-y-auto">
        <h2 class="text-3xl font-semibold mb-6 pb-10">Settings</h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          <section class="bg-black/10 dark:bg-white/10 rounded-xl p-6 space-y-4">
            <h3 class="font-medium text-2xl">Measurement Units</h3>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between items-center">
                <span>Temperature</span>
                <!-- <div class="flex bg-black/10 dark:bg-black/40 rounded-md p-1">
                  <button class="px-3 py-1 bg-white dark:bg-white/20 rounded shadow-sm">°C</button>
                  <button class="px-3 py-1">°F</button>
                </div> -->
                <div class="flex bg-black/10 dark:bg-black/40 rounded-md p-1 w-fit">
                <button 
                  @click="emit('update:modelValue', 'C')"
                  :class="modelValue === 'C' ? 'bg-white dark:bg-white/20 shadow-sm' : ''"
                  class="px-3 py-1 rounded transition-all"
                >
                  °C
                </button>
                <button 
                  @click="emit('update:modelValue', 'F')"
                  :class="modelValue === 'F' ? 'bg-white dark:bg-white/20 shadow-sm' : ''"
                  class="px-3 py-1 rounded transition-all"
                >
                  °F
                </button>
              </div>
              </div>
              <div class="flex justify-between border-t border-black/5 pt-3">
                <span>Wind Speed</span>
                <span class="opacity-70">km/h</span>
              </div>
              <div class="flex justify-between border-t border-black/5 pt-3">
                <span>Pressure</span>
                <span class="opacity-70">hPa</span>
              </div>
            </div>
          </section>

          <section class="bg-black/10 dark:bg-white/10 rounded-xl p-6 space-y-4">
            <h3 class="font-medium text-2xl">Notification Settings</h3>
            <div class="space-y-4 text-sm">
              <label class="flex justify-between items-center cursor-pointer pt-2">
                <span>Rain Alerts</span>
                <input type="checkbox" checked class="w-5 h-5 accent-indigo-500" />
              </label>
              <label class="flex justify-between items-center cursor-pointer pt-2">
                <span>UV Warnings</span>
                <input type="checkbox" checked class="w-5 h-5 accent-indigo-500" />
              </label>
              <label class="flex justify-between items-center cursor-pointer pt-2">
                <span>Morning Summary</span>
                <input type="checkbox" class="w-5 h-5 accent-indigo-500" />
              </label>
            </div>
          </section>

          <section class="bg-black/5 dark:bg-white/10 rounded-xl p-6">
            <h3 class="font-medium mb-3 text-2xl">Pinned Locations</h3>
            <ul class="text-sm grid grid-cols-2 gap-2 opacity-80">
              <li> Cambodia, KH</li>
              <li> London, UK</li>
              <li> Tokyo, JP</li>
              <li> Sydney, AU</li>
              <li> Paris, FR</li>
            </ul>
          </section>

          <section class="bg-black/5 dark:bg-white/10 rounded-xl p-6">
            <h3 class="font-medium mb-3 text-2xl">Data Source</h3>
            <select class="w-full bg-white dark:bg-black/30 rounded-lg px-4 py-3 text-sm outline-none border border-transparent focus:border-indigo-500">
              <option>OpenWeatherMap</option>
              <option>AccuWeather</option>
            </select>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>