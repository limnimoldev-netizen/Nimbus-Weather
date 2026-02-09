<template>
  <div class="min-h-screen bg-gradient-to-b from-indigo-950 via-blue-900 to-slate-950 text-white px-6 py-10 max-w-7xl mx-auto">

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

      <!-- MAIN CONTENT -->
      <div class="lg:col-span-2 space-y-10">

        <h1 class="text-3xl font-semibold mb-6 text-blue-300">
          Watch From Space When Storm In Asia
        </h1>

        <!-- Image -->
        <img src="/img/space.webp"
             alt="Space view"
             class="rounded-lg mb-6 w-full h-64 object-cover border border-white/20 shadow-lg"/>

        <!-- Article -->
        <p class="text-blue-100 leading-relaxed mb-4 text-justify">
          Satellites watch storms in Asia by taking real-time images of clouds, wind, and rain, 
          helping scientists track typhoons and cyclones, predict their paths, and warn people before they hit land.
        </p>

        <p class="text-blue-100 leading-relaxed mb-4 text-justify">
          Satellites orbiting Earth continuously monitor storms in Asia, capturing real-time data on cloud formation, rainfall, 
          wind speed, and sea surface conditions. This information allows scientists to track typhoons, cyclones, and monsoon storms, 
          predict their paths and intensity, issue early warnings, and help countries prepare for floods, strong winds, and other extreme weather.
        </p>

        <!-- Quote -->
        <blockquote class="border-l-4 border-sky-400 pl-6 py-4 text-sky-400 text-lg my-6">
          “Weather extremes in Asia are increasing, highlighting the importance of climate awareness and preparedness.”
        </blockquote>

        <p class="text-blue-100 leading-relaxed mb-4 text-justify">
          Satellites orbiting high above the Earth constantly monitor storms in Asia, including typhoons, cyclones, and heavy monsoon systems, 
          by capturing detailed data on cloud patterns, rainfall, wind speeds, temperature, and sea surface conditions. 
          This allows meteorologists to track storms from their formation over the oceans, predict their intensity and direction, 
          and provide early warnings to affected countries.
        </p>

        <p class="text-blue-100 leading-relaxed mb-4 text-justify">
          Governments and communities can prepare for floods, strong winds, and damage. Continuous satellite monitoring is especially important 
          in remote ocean areas where ground stations do not exist, making it possible to forecast storms days in advance and reduce disaster impact.
        </p>

        <p class="text-blue-100 leading-relaxed text-justify">
          Scientists and meteorologists use weather satellites orbiting Earth to watch storms like typhoons, cyclones, and heavy rain systems across Asia. 
          By analyzing these images, they can track storm movement, intensity, and potential landfall to save lives and prepare communities.
        </p>

      </div>

      <!-- SIDEBAR -->
      <aside class="space-y-8">

        <!-- Hot News -->
        <div class="bg-blue-900/70 p-6 rounded-lg border border-white/20 shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-white">Hot News</h2>
          <ul class="space-y-3">
            <li>
              <a href="#" class="block p-2 rounded-md text-sky-400 hover:text-sky-300 hover:bg-blue-800/50 transition">
                → Monsoon updates in Southeast Asia
              </a>
            </li>
            <li>
              <a href="#" class="block p-2 rounded-md text-sky-400 hover:text-sky-300 hover:bg-blue-800/50 transition">
                → Heatwave alerts in South Asia
              </a>
            </li>
            <li>
              <a href="#" class="block p-2 rounded-md text-sky-400 hover:text-sky-300 hover:bg-blue-800/50 transition">
                → Typhoon tracking in East Asia
              </a>
            </li>
            <li>
              <a href="#" class="block p-2 rounded-md text-sky-400 hover:text-sky-300 hover:bg-blue-800/50 transition">
                → Flood risks across major rivers
              </a>
            </li>
            <li>
              <a href="#" class="block p-2 rounded-md text-sky-400 hover:text-sky-300 hover:bg-blue-800/50 transition">
                → Climate change impacts
              </a>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div class="bg-blue-900/70 p-6 rounded-lg border border-white/20 shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-white">Categories</h2>
          <ul class="space-y-3">
            <li><a href="#" class="block p-2 rounded-md text-sky-400 hover:bg-blue-800/50 hover:text-sky-300 transition">→ Monsoon Climate</a></li>
            <li><a href="#" class="block p-2 rounded-md text-sky-400 hover:bg-blue-800/50 hover:text-sky-300 transition">→ Tropical Weather</a></li>
            <li><a href="#" class="block p-2 rounded-md text-sky-400 hover:bg-blue-800/50 hover:text-sky-300 transition">→ Extreme Events</a></li>
            <li><a href="#" class="block p-2 rounded-md text-sky-400 hover:bg-blue-800/50 hover:text-sky-300 transition">→ Seasonal Forecasts</a></li>
            <li><a href="#" class="block p-2 rounded-md text-sky-400 hover:bg-blue-800/50 hover:text-sky-300 transition">→ Climate Change</a></li>
          </ul>
        </div>

        <!-- Top Rated -->
        <div class="bg-blue-900/70 p-6 rounded-lg border border-white/20 shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-white">Top Rated Posts</h2>
          <ul class="space-y-4">
            <li class="p-3 rounded-lg hover:bg-blue-800/50 transition cursor-pointer">
              <p class="font-medium">Monsoon Forecast Accuracy</p>
              <span class="text-sky-400 font-semibold">9.1</span>
              <span class="text-blue-200 text-sm">(1,420 rates)</span>
            </li>
            <li class="p-3 rounded-lg hover:bg-blue-800/50 transition cursor-pointer">
              <p class="font-medium">Heatwave Survival Tips</p>
              <span class="text-sky-400 font-semibold">8.7</span>
              <span class="text-blue-200 text-sm">(980 rates)</span>
            </li>
            <li class="p-3 rounded-lg hover:bg-blue-800/50 transition cursor-pointer">
              <p class="font-medium">Typhoon Preparedness Guide</p>
              <span class="text-sky-400 font-semibold">9.3</span>
              <span class="text-blue-200 text-sm">(1,650 rates)</span>
            </li>
          </ul>
        </div>

      </aside>
    </div>
  </div>
</template>
