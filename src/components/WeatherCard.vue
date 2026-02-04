<script setup>
 information
    import Search from './Search.vue'
    defineProps ({
        location :String,
        temp :String,
        icon : String,
        color : String,
        windspeed : Number,
    });
</script>


<template>
  
  
  <div class="bg-blue-100 p-4 rounded-xl shadow-md w-64 text-center">
    <h2 class="text-xl font-bold text-blue-700">{{ city }}</h2>
    <p class="text-gray-600">{{ location }}</p>
    <p class="text-gray-600">Wind: {{ wind }} </p> 
    <p class="text-3xl font-semibold text-yellow-500">{{ temp }}</p>
  </div> 
  



</template>