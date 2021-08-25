<template>
  <h1 style="margin-bottom: 30px">Maps Directions</h1>
  <div id="map" style="width: 100%; height: 500px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

export default {
  setup() {
    const test = ref('testing')
    const loader = ref(new Loader({
        apiKey: "AIzaSyAwNk8Udz3hWvPh4fWY84t2cV9NH9eynhI",
        version: "weekly",
        libraries: []
      }))
    const centerPlace = ref({
      center: {
        lat:-7.314926914835439,
        lng: 112.7908943451404
      },
      zoom: 4
    })
    const maps = ref()
    const google = ref()
    const directionRenderer = ref()
    const directionService = ref()

    const loadMap = async () => {
      google.value = await loader.value.load();
      directionService.value = new google.value.maps.DirectionsService();
      directionRenderer.value = new google.value.maps.DirectionsRenderer();
      maps.value = new google.value.maps.Map(document.getElementById("map"), centerPlace.value)
      await directionRenderer.value.setMap(maps.value)
      calculateDirection('st louis, mo', 'oklahoma city, ok')

      // loader.value
      //   .load()
      //   .then((gog) => {
      //     google.value = gog
      //   })
    }

    const calculateDirection = (start =  null, end = null) => {
      console.log(start, end)
      directionService.value
        .route({
          origin: new google.value.maps.LatLng(-7.312937757603737, 112.78963823611858),
          // origin: {
          //   query: start,
          // },
          destination: new google.value.maps.LatLng(-7.315627454453582, 112.79015501697006),
          // destination: {
          //   query: end,
          // },
          travelMode: google.value.maps.TravelMode.DRIVING,
        })
        .then((response) => {
          directionRenderer.value.setDirections(response);
        })
        .catch((e) => {
          console.log('error', e)
          window.alert("Directions request failed due to " + status)
        })
    }

    onMounted(() => {
      loadMap();
    })

    return {
      loadMap,
      test
    }
  }
};
</script>