<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>



      <nav>
        <RouterLink to="/home"></RouterLink>
        <RouterLink to="/about"></RouterLink>
      </nav>

  <RouterView />
</template>


