<template>
    <div class="bg-gradient-to-b from-slate-900 to-slate-800 text-gray-300 min-h-screen">
    <div class="max-w-7xl mx-auto px-6 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <!-- MAIN CONTENT -->
        <div class="lg:col-span-2">
          <h1 class="text-3xl text-white font-semibold mb-6">
            The Weather In Cambodia
          </h1>

          <!-- Image -->
          <img
            src="/img/cambodia-rain-.jpg"
            alt="City view"
            class="rounded-lg mb-6 w-full h-64 object-cover"
          />

          <!-- Article -->
          <p class="mb-4 text-gray-400 leading-relaxed text-justify">
            Cambodia has a tropical monsoon climate with hot and humid 
            weather all year, a rainy season from May to October, and a 
            dry season from November to April, which strongly affects 
            farming and daily life.
          </p>

          <p class="mb-4 text-gray-400 leading-relaxed text-justify">
            Cambodia has a tropical monsoon climate with hot and humid weather 
            throughout the year, a rainy season from May to October that brings 
            heavy rainfall important for agriculture, and a dry season from November 
            to April, including a cooler period and a very hot period that affects daily 
            activities and water use.
          </p>

          <!-- Quote -->
          <blockquote
            class="border-l-4 border-sky-400 pl-6 py-4 text-sky-400 text-lg my-6"
          >
            “Weather extremes in Asia are increasing, highlighting the importance
            of climate awareness and preparedness.”
          </blockquote>

          <p class="mb-4 text-gray-400 leading-relaxed text-justify">
            Cambodia has a tropical monsoon climate with high temperatures 
            and humidity year-round, a rainy season from May to October that 
            brings frequent and heavy rainfall essential for rice farming and 
          </p>

          <p class="text-gray-400 leading-relaxed text-justify">
            natural water sources, and a dry season from November to April that 
            includes a cooler dry period followed by an extremely hot period, with
             the weather strongly influencing agriculture, water supply, daily life, 
             and the national economy.
          </p>
            <br>
          <p class="text-gray-400 leading-relaxed text-justify">
            Cambodia has a tropical monsoon climate, which means the weather is 
            generally hot and humid throughout the year with clear wet and dry seasons. 
            The country has two main seasons: the rainy season and the dry season. The 
            rainy season usually lasts from May to October and is influenced by the 
            southwest monsoon, bringing heavy rainfall, cloudy skies, and high humidity. 
            During this time, temperatures are warm, and rain is very important for rice 
            farming and agriculture, although heavy rain can sometimes cause floods, especially 
            in lowland areas and near the Mekong River. The dry season runs from November to April 
            and is divided into a cool dry period from November to January and a hot dry period from 
            February to April. Temperatures during the hot season can rise to 35–40°C, making it the 
            hottest time of the year. Overall, Cambodia’s weather plays a major role in daily life, 
            farming, water supply, and the economy, and people plan their activities based on seasonal 
            weather changes.
          </p>
        </div>

        <!-- SIDEBAR -->
        <aside class="space-y-8">

          <!-- Hot News -->
          <div class="bg-slate-800 p-6 rounded-lg">
            <h2 class="text-xl text-white font-semibold mb-4">Hot News</h2>
            <ul class="space-y-3">
              <li>
                <a href="#" class="block p-2 rounded-md text-sky-400 hover:text-sky-300 hover:bg-slate-700 transition">
                  → Monsoon updates in Southeast Asia
                </a>
              </li>
              <li>
                <a href="#" class="block p-2 rounded-md text-sky-400 hover:text-sky-300 hover:bg-slate-700 transition">
                  → Heatwave alerts in South Asia
                </a>
              </li>
              <li>
                <a href="#" class="block p-2 rounded-md text-sky-400 hover:text-sky-300 hover:bg-slate-700 transition">
                  → Typhoon tracking in East Asia
                </a>
              </li>
              <li>
                <a href="#" class="block p-2 rounded-md text-sky-400 hover:text-sky-300 hover:bg-slate-700 transition">
                  → Flood risks across major rivers
                </a>
              </li>
              <li>
                <a href="#" class="block p-2 rounded-md text-sky-400 hover:text-sky-300 hover:bg-slate-700 transition">
                  → Climate change impacts
                </a>
              </li>
            </ul>
          </div>

          <!-- Categories -->
          <div class="bg-slate-800 p-6 rounded-lg">
            <h2 class="text-xl text-white font-semibold mb-4">Categories</h2>
            <ul class="space-y-3">
              <li><a href="#" class="block p-2 rounded-md text-sky-400 hover:bg-slate-700 hover:text-sky-300 transition">→ Monsoon Climate</a></li>
              <li><a href="#" class="block p-2 rounded-md text-sky-400 hover:bg-slate-700 hover:text-sky-300 transition">→ Tropical Weather</a></li>
              <li><a href="#" class="block p-2 rounded-md text-sky-400 hover:bg-slate-700 hover:text-sky-300 transition">→ Extreme Events</a></li>
              <li><a href="#" class="block p-2 rounded-md text-sky-400 hover:bg-slate-700 hover:text-sky-300 transition">→ Seasonal Forecasts</a></li>
              <li><a href="#" class="block p-2 rounded-md text-sky-400 hover:bg-slate-700 hover:text-sky-300 transition">→ Climate Change</a></li>
            </ul>
          </div>

          <!-- Top Rated -->
          <div class="bg-slate-800 p-6 rounded-lg">
            <h2 class="text-xl text-white font-semibold mb-4">Top Rated Posts</h2>
            <ul class="space-y-4">
              <li class="p-3 rounded-lg hover:bg-slate-700 transition cursor-pointer">
                <p class="font-medium">Monsoon Forecast Accuracy</p>
                <span class="text-sky-400 font-semibold">9.1</span>
                <span class="text-gray-500 text-sm">(1,420 rates)</span>
              </li>
              <li class="p-3 rounded-lg hover:bg-slate-700 transition cursor-pointer">
                <p class="font-medium">Heatwave Survival Tips</p>
                <span class="text-sky-400 font-semibold">8.7</span>
                <span class="text-gray-500 text-sm">(980 rates)</span>
              </li>
              <li class="p-3 rounded-lg hover:bg-slate-700 transition cursor-pointer">
                <p class="font-medium">Typhoon Preparedness Guide</p>
                <span class="text-sky-400 font-semibold">9.3</span>
                <span class="text-gray-500 text-sm">(1,650 rates)</span>
              </li>
            </ul>
          </div>

        </aside>
      </div>
    </div>
  </div>
</template>