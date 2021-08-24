<template>
  <GoogleMap
  api-key="AIzaSyAwNk8Udz3hWvPh4fWY84t2cV9NH9eynhI"
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="15"
  >
    <Marker :options="markerOptions" />
  </GoogleMap>

</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'
import Geolocation from '@/geolocation'
import { onMounted, ref } from 'vue'


export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center  = ref({ lat: 40.689247, lng: -74.044502 })
    const markerOptions = ref({ position: center, label: 'O', title: 'OFFICE' })

// Posisi terkini sesuai gps
    const getLocation = async () => {
      var geo = await Geolocation.getCurrentPosition();
      console.log(geo)
      center.value.lat = geo.coords.latitude
      center.value.lng = geo.coords.longitude
    }

    onMounted(() => {
      getLocation()
    }) 

    return { center, markerOptions }
  },


})
</script>