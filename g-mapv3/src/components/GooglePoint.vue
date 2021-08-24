<template>
  <GoogleMap
  api-key="AIzaSyAwNk8Udz3hWvPh4fWY84t2cV9NH9eynhI"
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="15"
  >
    
    <Marker :options="markerOrigin" />
    <Marker :options="markerDestination" />
    <Polyline :options="directionsService"/>
  </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Polyline, Marker} from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Polyline, Marker},
  setup() {
    const center = { lat:-7.314926914835439, lng: 112.7908943451404}

    const origin = {lat :-7.312937757603737, lng :  112.78963823611858}
    const destinations = {lat : -7.315627454453582, lng : 112.79015501697006}

    const markerOrigin = ({ position: origin, label: 'O', title: 'Origin' })
    const markerDestination = ({ position: destinations, label: 'D', title: 'Destination' })



    const flightPlanCoordinates = [
    { lat : -7.312181620347129, lng :112.78900409869863},
    { lat:-7.314926914835439, lng: 112.7908943451404},
    ]

    const deliveryPlanCoordinate = [
      {lat :-7.312937757603737, lng :  112.78963823611858},
      {lat : -7.315627454453582, lng : 112.79015501697006},
    ]
 
    const flightPath = {
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    }
    const directionsService = {
      path : deliveryPlanCoordinate,
      geodesic: true,
      strokeColor: '#0293ed',
      strokeOpacity: 1.0,
      strokeWeight: 5,
        
    }


    return { center, flightPath, markerOrigin, markerDestination, directionsService }
  },
})
</script>