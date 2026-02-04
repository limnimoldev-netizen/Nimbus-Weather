
<template>
  <div class="min-h-screen bg-white text-slate-800">

    <!-- Hero Section -->
   <section
  class="relative
         px-6 md:px-10
         py-16 md:py-24
         flex flex-col md:flex-row
         items-center justify-around
         gap-10
         bg-cover bg-center"
  style="background-image: url('/public/wind.jpeg');"
>
  <!-- Overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-sky-100/0 to-white/90"></div>

  <!-- Content -->
  <div class="relative max-w-xl text-center md:text-left">
    <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-4">
      About Us<br class="hidden md:block" />
    </h1>
    <p class="text-slate-700 leading-relaxed">
      We believe staying informed shouldn’t be complicated.
      SkyBound turns atmospheric data into simple,
      actionable insights for your daily life.
    </p>
  </div>

  <div class="relative text-6xl md:text-8xl">
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

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
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
    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8 pt-12 pl-30">Our Journey</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-5xl mx-auto">
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

  <section class="min-h-[50vh] bg-white px-5 sm:px-6 py-16 md:py-20 flex items-center justify-center">
  <div class="w-full max-w-5xl bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-10 lg:p-12 
              flex flex-col md:flex-row items-center gap-8 md:gap-12 
              shadow-xl border border-blue-100/60">

    <!-- Text side -->
    <div class="text-center md:text-left max-w-lg">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">
        Subscribe to SkyBound
      </h2>
      <p class="text-slate-600 text-lg leading-relaxed">
        Join our community and get exclusive updates, priority access to new features, 
        personalized recommendations, and more — straight to your inbox.
      </p>
    </div>

    <!-- Form side -->
    <form class="w-full md:min-w-[380px] flex flex-col sm:flex-row gap-4">
      <label class="sr-only" for="email">Email address</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        autocomplete="email"
        placeholder="your@email.com"
        class="w-full px-5 py-3.5 rounded-2xl text-slate-800
               bg-white border border-slate-300
               placeholder:text-slate-400
               focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50
               transition duration-200 shadow-sm"
      />
      <button
        type="submit"
        class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:from-blue-800 active:to-indigo-800
               text-white px-8 py-3.5 rounded-2xl font-semibold
               shadow-md hover:shadow-lg
               transition duration-200 hover:scale-[1.03] active:scale-100
               whitespace-nowrap"
      >
        Subscribe Now
      </button>
    </form>

  </div>
</section>

  </div>
</template>
 main
