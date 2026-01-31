<script setup>


const today = {
  temp: 31,
  max: 33,
  min: 25,
  desc: 'Sunny',
  icon: 'https://openweathermap.org/img/wn/01d.png'
}

const forecast = [
  { name: 'Mon', icon: 'https://openweathermap.org/img/wn/01d.png', max: 32, min: 25, desc: 'Sunny' },
  { name: 'Tue', icon: 'https://openweathermap.org/img/wn/02d.png', max: 30, min: 24, desc: 'Cloudy' },
  { name: 'Wed', icon: 'https://openweathermap.org/img/wn/10d.png', max: 29, min: 23, desc: 'Rain' },
  { name: 'Thu', icon: 'https://openweathermap.org/img/wn/01d.png', max: 33, min: 26, desc: 'Clear' },
  { name: 'Fri', icon: 'https://openweathermap.org/img/wn/03d.png', max: 31, min: 25, desc: 'Clouds' },
  { name: 'Sat', icon: 'https://openweathermap.org/img/wn/10d.png', max: 28, min: 23, desc: 'Rainy' },
  { name: 'Sun', icon: 'https://openweathermap.org/img/wn/04d.png', max: 30, min: 24, desc: 'Overcast' }
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 p-8">
    
    <!-- Today -->
    <TodayWeatherCard :weather="today" />

    <!-- Weekly -->
    <WeeklyWeatherCard :forecast="forecast" />

  </div>
</template>
