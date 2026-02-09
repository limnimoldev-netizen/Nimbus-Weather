<script setup>
import { onMounted, ref, watch } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const props = defineProps({
  city: String,
  lat: Number,
  lon: Number
})

const mapElement = ref(null)
let map

onMounted(() => {
  map = L.map(mapElement.value).setView([props.lat, props.lon], 12)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  L.marker([props.lat, props.lon])
    .addTo(map)
    .bindPopup(props.city)
    .openPopup()
})

// Update map when props change
watch(
  () => [props.lat, props.lon],
  ([newLat, newLon]) => {
    if (marker) map.removeLayer(marker);
  marker = L.marker([newLat, newLon]).addTo(map).bindPopup(props.city).openPopup();

    }
  
)
</script>

<template>
  <div class="w-full h-150  rounded-3xl overflow-hidden shadow-xl border border-white/20 backdrop-blur-md">
    <div ref="mapElement" class="w-full h-150"></div>
  </div>
</template>
