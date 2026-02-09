<template>
  <div class="min-h-screen bg-gradient-to-b from-indigo-950 via-blue-900 to-slate-950 text-white px-6 py-10 ">

    <!-- GRID -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <main class="lg:col-span-2 space-y-14">

            <article>
            <h1 class="text-3xl font-semibold mb-4 text-white">
                The Weather Of Phnom Penh City
            </h1>

            <a href="/infor">
                <img src="/img/Rain31016.jpg"
                    class="rounded-lg w-full mb-4 h-[400px] cursor-pointer border border-white/20 shadow-lg">
            </a>

            <p class="text-blue-100 mb-4">
                Phnom Penh Storm Alert: Severe thunderstorm expected today with heavy rain and strong winds.
                Advice: Stay indoors, secure outdoor items, and expect possible localized flooding.
            </p>

            <a href="/infor">
                <button class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition-all">
                Read more
                </button>
            </a>
            </article>

            <hr class="border-white/20">

            <article>
            <h1 class="text-3xl font-semibold mb-4 text-white">
                The Weather Of Cambodia
            </h1>

            <a href="/infor1">
                <img src="/img/cambodia-rain-.jpg"
                    class="rounded-lg w-full mb-4 h-[400px] cursor-pointer border border-white/20 shadow-lg">
            </a>

            <p class="text-blue-100 mb-4">
                Cambodia Storm Alert: Strong thunderstorm expected today with heavy rain and winds.
                Advice: Stay indoors, secure outdoor items, and watch for possible flooding.
            </p>

            <a href="/infor1">
                <button class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition-all">
                Read more
                </button>
            </a>
            </article>

            <hr class="border-white/20">

            <!-- POST 3 (SPACE) -->
            <article>
            <h1 class="text-3xl font-semibold mb-4 text-white">
                Watch From Space When Storm In The Asia
            </h1>

            <a href="/infor2">
                <img src="/img/space.webp"
                    class="rounded-lg w-full mb-4 h-[400px] cursor-pointer border border-white/20 shadow-lg">
            </a>

            <p class="text-blue-100 mb-4">
                Asia Storm Alert: A severe thunderstorm is expected today across parts of the country, bringing heavy rainfall, strong
                winds, and occasional lightning. Weather conditions may reduce visibility, and localized flooding is possible in low-lying areas.
            </p>

            <a href="/infor2">
                <button class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition-all">
                Read more
                </button>
            </a>
            </article>

      </main>

      <!-- ================= SIDEBAR ================= -->
      <aside class="space-y-8">

        <!-- CATEGORIES -->
        <div class="bg-blue-900/70 p-6 rounded-lg border border-white/20 shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-white">Categories</h2>
          <ul class="space-y-3">
            <li class="text-sky-400 hover:text-sky-300 cursor-pointer">Monsoon Regions of Asia</li>
            <li class="text-sky-400 hover:text-sky-300 cursor-pointer">Tropical Climate Zones</li>
            <li class="text-sky-400 hover:text-sky-300 cursor-pointer">Arid & Desert Areas</li>
            <li class="text-sky-400 hover:text-sky-300 cursor-pointer">Mountain & Cold Regions</li>
          </ul>
        </div>

        <!-- HOT NEWS -->
        <div class="bg-blue-900/70 p-6 rounded-lg border border-white/20 shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-white">Hot News</h2>
          <ul class="space-y-3">
            <li class="text-sky-400 hover:text-sky-300 cursor-pointer">Monsoon rainfall updates across South & Southeast Asia</li>
            <li class="text-sky-400 hover:text-sky-300 cursor-pointer">Heatwave conditions in South Asia</li>
            <li class="text-sky-400 hover:text-sky-300 cursor-pointer">Typhoon activity in East Asia</li>
            <li class="text-sky-400 hover:text-sky-300 cursor-pointer">Flood risks in major Asian river basins</li>
            <li class="text-sky-400 hover:text-sky-300 cursor-pointer">Drought concerns in Central Asia</li>
            <li class="text-sky-400 hover:text-sky-300 cursor-pointer">Seasonal weather shifts in Southeast Asia</li>
            <li class="text-sky-400 hover:text-sky-300 cursor-pointer">Climate change effects on Asian weather</li>
            <li class="text-sky-400 hover:text-sky-300 cursor-pointer">Extreme weather alerts across Asia</li>
          </ul>
        </div>

        <!-- TOP RATED POSTS -->
        <div class="bg-blue-900/70 p-6 rounded-lg border border-white/20 shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-white">Top rated posts</h2>

          <ul class="space-y-4">
            <li>
              <p class="text-blue-100">Monsoon Forecast in Southeast Asia</p>
              <span class="text-sky-400 font-semibold">8.9</span>
              <span class="text-blue-200 text-sm">(1,245 rates)</span>
            </li>

            <li>
              <p class="text-blue-100">Heatwave Impact Across South Asia</p>
              <span class="text-sky-400 font-semibold">8.6</span>
              <span class="text-blue-200 text-sm">(982 rates)</span>
            </li>

            <li>
              <p class="text-blue-100">Typhoon Tracking in East Asia</p>
              <span class="text-sky-400 font-semibold">9.1</span>
              <span class="text-blue-200 text-sm">(1,430 rates)</span>
            </li>
          </ul>
        </div>

      </aside>

    </div>
  </div>
</template>
