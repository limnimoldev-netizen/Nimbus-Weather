<template>
  <header
    class="sticky top-0 z-50 bg-[#FFFFFF] backdrop-blue border-b border-gray-200 shadow-sm"
  >
    <div class="max-w-[1280px] mx-auto py-0 px-22">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <img src="@/assets/ourlogo.png" alt="" class="h-16 w-auton" />
        </div>

        <!-- Nav links -->
        <nav class="hidden md:flex items-center gap-8 ">
  <RouterLink to="/home" class="relative font-roboto transition hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full text-[#333333] ">
    Home
  </RouterLink>

  <div class="relative group">
    <button class="flex items-center gap-2 px-5 py-2 rounded-full font-roboto transition-all duration-300 
       text-[#333333] 
      hover:bg-[#75b4e3] hover:text-[#31255a]">
      Weather
      <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </button>
    
    <div class="absolute left-0 top-full w-48 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50">
      <div class="bg-white border border-gray-100 rounded-xl shadow-xl py-2 overflow-hidden">
        <RouterLink to="/weather/local" class="block px-4 py-2 text-sm text-[#333333]  hover:bg-[#75b4e3]/20 hover:text-[#31255a] ">Country</RouterLink>
        <RouterLink to="/weather/radar" class="block px-4 py-2 text-sm text-[#333333]  hover:bg-[#75b4e3]/20 hover:text-[#31255a]">City</RouterLink>
      </div>
    </div>
  </div>

  <RouterLink to="/about" class="relative text-[#333333] font-roboto transition hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">About</RouterLink>

  <RouterLink to="/new" class="relative text-[#333333] font-roboto transition hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">New</RouterLink>

  <RouterLink to="/sitting" class="relative text-[#333333] font-roboto transition hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Sitting</RouterLink>
 
</nav>

        <!-- icon -->
        <div
          class="h-10 w-10 bg-[#31255a] flex justify-center items-center rounded-xl transition hover:bg-[#75b4e3]"
        >
          <a href="/register"><i class="fa-solid fa-user relative text-[#ffffff] font-medium  after:asolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"></i></a>
        </div>
      </div>
    </div>
  </header>
</template>
