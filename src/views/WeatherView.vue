<template>

    <div class="min-h-screen p-70 bg-[#31255a] flex flex-col items-center justify-start pt-15 ">
        <img src="@/assets/weatherbanner.png" alt="Weather Banner" class="w-full h-50 object-cover" />
        <div class="relative           w-full  ">
                <input type="text" placeholder="Enter city..." class="w-full px-3 py-3  border border-[#75b4e3]  rounded-xl bg-[#ffffff] focus:ring-2 focus:ring-[#75b4e3] outline-none  transition-all" />
                <button class="absolute right-1 top-1 bottom-1  px-8 bg-[#31255a] hover:bg-[#75b4e3] hover:text-[#31255a] text-white  rounded-xl  transform transition ">Search</button>
        </div>
    </div>




</template>