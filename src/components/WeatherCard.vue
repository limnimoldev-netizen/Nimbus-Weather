<script setup>
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
    <Search/>
    <span>{{ location }}</span>
</template>