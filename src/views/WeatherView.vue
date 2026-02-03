<script setup>
import WeatherCard from '@/components/WeatherCard.vue'
</script>

<template>

    <div class="bg-[#e9ecef]">

        <div class="relative w-full  h-screen">
            
            <img src="@/assets/weatherbanner.png"alt="Weather Banner"class="absolute inset-0 w-full h-100 object-cover"/>

            <div class="relative w-250 mx-auto ">
                <input type="text" placeholder="Find your location..." class="w-full px-6 py-4  border border-[#75b4e3] mt-35 rounded-full bg-[#ffffff] focus:ring-2 focus:ring-[#75b4e3] outline-none  transition-all" />
                <button class="absolute right-1 top-1 bottom-1  px-8 bg-[#31255a] hover:bg-[#75b4e3] hover:text-[#31255a] text-white  rounded-full  mt-35 transform transition ">Search</button>

            </div>

        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <WeatherCard 
            city="London" 
            temp="15°C" 
            location="UK" 
            wind="5 km/h"
            />
            <WeatherCard 
            city="New York" 
            temp="20°C" 
            location="USA" 
            wind="8 km/h"
            />
            <WeatherCard 
            city="Tokyo" 
            temp="25°C" 
            location="Japan" 
            wind="3 km/h"
            />
            <WeatherCard 
            city="Paris" 
            temp="18°C" 
            location="France" 
            wind="6 km/h"
            />
            <WeatherCard 
            city="Sydney" 
            temp="22°C" 
            location="Australia" 
            wind="7 km/h"
            />
        
        </div>

    </div>

</template>