<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import.meta.env.VITE_RAPID_API_KEY


</script>


<template>
  <Header />
  <RouterView />
  <Footer />
</template>

