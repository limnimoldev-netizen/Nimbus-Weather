<template>
  <div class="min-h-screen bg-white text-slate-800">

    <!-- Hero Section -->
    <section
      class="bg-gradient-to-b from-sky-100 to-white
             px-6 md:px-10
             py-16 md:py-24
             flex flex-col md:flex-row
             items-center justify-between
             gap-10">

      <div class="max-w-xl text-center md:text-left">
        <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-4">
          About Us<br class="hidden md:block" />
        </h1>
        <p class="text-slate-600 leading-relaxed">
          We believe staying informed shouldn’t be complicated.
          SkyBound turns atmospheric data into simple,
          actionable insights for your daily life.
        </p>
      </div>

      <div class="text-6xl md:text-8xl">
        ☀️☁️
      </div>
    </section>

    <!-- Mission Section -->
    <section class="px-6 md:px-10 py-16 text-center">
      <h2 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4 pb-4">
        Our Mission: Why Accuracy Matters
      </h2>
      <p class="max-w-2xl mx-auto text-slate-600 mb-12 md:mb-14 pb-4">
        Weather isn’t just about what to wear — it’s about safety,
        planning, and peace of mind.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card -->
        <div class="bg-white border border-slate-200 rounded-2xl p-8
         shadow-sm
         transition-all duration-300 ease-out
         hover:-translate-y-2
         hover:shadow-lg
         hover:border-sky-300">

  <div class="text-4xl mb-4">📡</div>
  <h3 class="font-semibold mb-2">Real-Time Precision</h3>
  <p class="text-sm text-slate-600">
    Hyper-local data updated every 60 seconds.
  </p>
</div>
    <div class="bg-white border border-slate-200 rounded-2xl p-8
         shadow-sm
         transition-all duration-300 ease-out
         hover:-translate-y-2
         hover:shadow-lg
         hover:border-sky-300">

  <div class="text-4xl mb-4">🌍</div>
  <h3 class="font-semibold mb-2">Global Coverage</h3>
  <p class="text-sm text-slate-600">
    Tracking 40,000+ stations across 7 continents.
  </p>
</div>

    <div class="bg-white border border-slate-200 rounded-2xl p-8
         shadow-sm
         transition-all duration-300 ease-out
         hover:-translate-y-2
         hover:shadow-lg
         hover:border-sky-300">

  <div class="text-4xl mb-4">🚨</div>
  <h3 class="font-semibold mb-2">Severe Alerts</h3>
  <p class="text-sm text-slate-600">
    Instant notifications that prioritize your safety.
  </p>
</div>

        
      </div>
    </section>

    <!-- Science Section -->
    <section class="bg-white px-6 md:px-10">
      <h2 class="text-xl md:text-2xl font-semibold text-center mb-12 md:mb-14 pb-4">
        Where
        Science Meets Simplicity
      </h2>

      <div
        class="grid grid-cols-1 md:grid-cols-2
               gap-10 md:gap-12
               items-center
               max-w-5xl mx-auto">

        <div class="rounded-2xl overflow-hidden h-64 md:h-56 w-full shadow-sm border border-slate-200">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994232.5938546695!2d102.33946773615733!3d12.138284401463459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2sCambodia!5e0!3m2!1sen!2skh!4v1770022199890!5m2!1sen!2skh"
    class="w-full h-full border-0"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>


        <ul class="space-y-4 md:space-y-5 text-slate-700">
          <li>
            <span class="font-semibold">Data Aggregation:</span>
            NOAA, ECMWF & local weather sensors.
          </li>
          <li>
            <span class="font-semibold">AI Integration:</span>
            Smart filtering removes noise for 99% clarity.
          </li>
        </ul>
      </div>
    </section>

    <section class="min-h bg-white text-slate-500 px-6 md:px-10">
    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8 pt-12">Our Journey</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div class="text-3xl font-bold text-slate-900">12M+</div>
        <div class="text-sm text-slate-500 mt-1">Monthly Users</div>
      </div>
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div class="text-3xl font-bold text-slate-900">99.9%</div>
        <div class="text-sm text-slate-500 mt-1">Uptime Rate</div>
      </div>
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div class="text-3xl font-bold text-slate-900">190+</div>
        <div class="text-sm text-slate-500 mt-1">Countries Covered</div>
      </div>
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div class="text-3xl font-bold text-slate-900">0.5s</div>
        <div class="text-sm text-slate-500 mt-1">Data Latency</div>
      </div>
    </div>

    <div class="mt-12 flex items-center justify-center space-x-4 opacity-50 pt-15">
      <span class="text-xs">2025</span>
      <div class="h-px w-24 bg-blue-300 relative">
        <div class="absolute -top-1 left-0 w-2 h-2 rounded-full bg-blue-500"></div>
      </div>
      <span class="text-xs">2026</span>
      <div class="h-px w-24 bg-blue-300 relative">
        <div class="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
      </div>
      <span class="text-xs font-bold text-blue-600">Today</span>
    </div>
  </section>

  <section class="min-h bg-white text-slate-800 px-6 py-16 ">
    <div class="bg-gradient-to-r from-blue-300 to-blue-500 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between text-white">
      <h2 class="text-3xl font-bold mb-6 md:mb-0">Plan your day with confidence.</h2>
      <div class="flex space-x-4">
        <button class="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-xl font-semibold transition">Subscribe Now</button>
      </div>
    </div>
  </section>

  </div>
</template>
