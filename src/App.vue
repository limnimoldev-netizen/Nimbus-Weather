<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import RegisterView from './views/RegisterView.vue';

</script>

<template>

    
    <Header/>
    <RouterView />
    <Footer />
    
  </template>
