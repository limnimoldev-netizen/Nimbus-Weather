<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-950 text-white">

    <!-- Hero Section -->
    <section
      class="relative px-6 md:px-10 py-16 md:py-24
             flex flex-col md:flex-row items-center justify-around gap-10
             bg-cover bg-center"
      style="background-image: url('/public/wind.jpeg');"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-indigo-900/70 to-slate-950/95"></div>

      <!-- Content -->
      <div class="relative max-w-xl text-center md:text-left">
        <h1 class="text-3xl md:text-4xl font-bold mb-4 text-white">
          About Us
        </h1>
        <p class="text-slate-300 leading-relaxed">
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
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-white">
        Our Mission: Why Accuracy Matters
      </h2>
      <p class="max-w-2xl mx-auto text-slate-400 mb-14">
        Weather isn’t just about what to wear — it’s about safety,
        planning, and peace of mind.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <!-- Card -->
        <div class="bg-white/10 backdrop-blur-xl border border-white/20
                    rounded-2xl p-8 shadow-lg
                    transition hover:-translate-y-2 hover:shadow-blue-500/30">
          <div class="text-4xl mb-4">📡</div>
          <h3 class="font-semibold mb-2 text-white">Real-Time Precision</h3>
          <p class="text-sm text-slate-300">
            Hyper-local data updated every 60 seconds.
          </p>
        </div>

        <div class="bg-white/10 backdrop-blur-xl border border-white/20
                    rounded-2xl p-8 shadow-lg
                    transition hover:-translate-y-2 hover:shadow-blue-500/30">
          <div class="text-4xl mb-4">🌍</div>
          <h3 class="font-semibold mb-2 text-white">Global Coverage</h3>
          <p class="text-sm text-slate-300">
            Tracking 40,000+ stations across 7 continents.
          </p>
        </div>

        <div class="bg-white/10 backdrop-blur-xl border border-white/20
                    rounded-2xl p-8 shadow-lg
                    transition hover:-translate-y-2 hover:shadow-blue-500/30">
          <div class="text-4xl mb-4">🚨</div>
          <h3 class="font-semibold mb-2 text-white">Severe Alerts</h3>
          <p class="text-sm text-slate-300">
            Instant notifications that prioritize your safety.
          </p>
        </div>

      </div>
    </section>

    <!-- Science Section -->
    <section class="px-6 md:px-10 py-16">
      <h2 class="text-xl md:text-2xl font-semibold text-center mb-14 text-white">
        Where Science Meets Simplicity
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            
        <div class="rounded-2xl w-full overflow-hidden h-48 sm:h-60 md:h-72 ">
          <iframe
            class="w-full h-full"
            src="/src/assets/team.png"
          ></iframe>
        </div>


        <ul class="space-y-5 text-slate-300">
          <li><span class="font-semibold text-white">Data Aggregation:</span> NOAA, ECMWF & local sensors.</li>
          <li><span class="font-semibold text-white">AI Integration:</span> Smart filtering for clarity.</li>
        </ul>
      </div>
    </section>

    <section class="px-6 md:px-10 py-16">
      <h2 class="text-sm font-bold uppercase tracking-widest text-white mb-8 text-center">
        Our Journey
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
          <div class="text-3xl font-bold text-white">12M+</div>
          <div class="text-sm text-slate-400">Monthly Users</div>
        </div>
        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
          <div class="text-3xl font-bold text-white">99.9%</div>
          <div class="text-sm text-slate-400">Uptime</div>
        </div>
        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
          <div class="text-3xl font-bold text-white">190+</div>
          <div class="text-sm text-slate-400">Countries</div>
        </div>
        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
          <div class="text-3xl font-bold text-white">0.5s</div>
          <div class="text-sm text-slate-400">Latency</div>
        </div>
      </div>
    </section>

    <!-- Subscribe -->
    <section class="py-20 flex justify-center">
      <div class="max-w-5xl w-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20
                  backdrop-blur-2xl border border-white/20
                  rounded-3xl p-10 flex flex-col md:flex-row gap-10 shadow-2xl">

        <div>
          <h2 class="text-3xl font-bold mb-4 text-white">
            Subscribe to SkyBound
          </h2>
          <p class="text-slate-300">
            Get updates, alerts, and personalized forecasts.
          </p>
        </div>

        <form class="flex flex-col sm:flex-row gap-4 w-full md:max-w-md">
          <input
            type="email"
            placeholder="your@email.com"
            class="flex-1 px-5 py-3 rounded-2xl bg-white/10 border border-white/20
                   text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            class="px-8 py-3 rounded-2xl font-semibold text-white
                   bg-gradient-to-r from-blue-600 to-indigo-600
                   hover:from-blue-700 hover:to-indigo-700 transition">
            Subscribe
          </button>
        </form>

      </div>
    </section>

  </div>
</template>
