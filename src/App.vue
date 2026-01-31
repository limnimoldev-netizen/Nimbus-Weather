<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HelloWorld from './components/HelloWorld.vue'; 
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
  <script setup>
  feat/register
  import { RouterView }  from 'vue-router';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import TheWelcome from '@/components/TheWelcome.vue';
  import RegisterView from './views/RegisterView.vue';
  </script>
>


  <template>


    <RegisterView/>
    <Header/>
    <Footer />
    <RouterView />
  </template>
