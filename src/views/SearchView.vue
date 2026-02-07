<template>
  <div class="min-h-screen bg-[#0f172a] bg-[url('https://images.unsplash.com')] bg-cover bg-center bg-blend-overlay flex items-center justify-center p-6">
    <div class="w-full max-w-xl bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[3rem] shadow-2xl">
      
      <div class="text-center mb-10">
        <h1 class="text-4xl font-black text-white tracking-tighter uppercase">Which Your Location</h1>
        <p class="text-blue-200/60 text-sm mt-2">Discover weather around the world</p>
      </div>

      <div class="space-y-6">
        <div>
          <label class="text-[10px] font-bold text-blue-400 uppercase tracking-widest ml-4 mb-2 block"> Choose Country</label>
          <select class="w-full bg-slate-900/80 text-white p-5 rounded-2xl border border-white/10 outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
            <option>Cambodia</option>
            <option>United States</option>
            <option>United Kingdom</option>
          </select>
        </div>

        <div>
          <label class="text-[10px] font-bold text-blue-400 uppercase tracking-widest ml-4 mb-2 block"> Enter City</label>
          <div class="relative">
            <input type="text" placeholder="Type city name..." class="w-full bg-slate-900/80 text-white p-5 pr-32 rounded-2xl border border-white/10 outline-none focus:ring-2 focus:ring-blue-500" />
            <button @click="$router.push('/weather')" class="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 px-6 rounded-xl font-bold text-white transition-all active:scale-95 shadow-lg shadow-blue-600/30">
              Search
            </button>
          </div>
        </div>

        <button class="w-full flex items-center justify-center gap-2 text-blue-300 hover:text-white transition-colors text-sm font-semibold">
          <span>📍</span> Use my current location
        </button>
      </div>

      <div class="mt-12 pt-8 border-t border-white/5">
        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Recent Discoveries</p>
        <div class="flex flex-wrap gap-2">
          <button class="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs hover:bg-blue-600 transition">Phnom Penh</button>
          <button class="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs hover:bg-blue-600 transition">Siem Reap</button>
        </div>
      </div>
    </div>
  </div>
</template>