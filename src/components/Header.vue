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

  <RouterLink to="/weather" class="relative font-roboto transition hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full text-[#333333] ">
    Weather
  </RouterLink>
  

  <RouterLink to="/about" class="relative text-[#333333] font-roboto transition hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">About</RouterLink>

  <RouterLink to="/new" class="relative text-[#333333] font-roboto transition hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">New</RouterLink>

  <RouterLink to="/sitting" class="relative text-[#333333] font-roboto transition hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Sitting</RouterLink>
 
</nav>

        <div
          class="h-10 w-10 bg-[#31255a] flex justify-center items-center rounded-xl transition hover:bg-[#75b4e3]"
        >
          <a href="/register"><i class="fa-solid fa-user relative text-[#ffffff] font-medium  after:asolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"></i></a>
        </div>
      </div>
    </div>
  </header>

</template>
