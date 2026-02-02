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


        <div class="flex  gap-4 p-10">

            <WeatherCard
            city="" 
            temp="72°F" 
            location="Manhattan" 
            status="Sunny" 
            wind="5 km/h"/>
            
            <WeatherCard 
            city="Los Angeles" 
            temp="85°F" 
            location="Hollywood" 
            status="Partly Cloudy" 
            wind="10 km/h"/>

            <WeatherCard 
            city="Chicago" 
            temp="68°F" 
            location="Downtown" 
            status="Rainy" 
            wind="15 km/h"/>

        </div>


    </div>

</template>