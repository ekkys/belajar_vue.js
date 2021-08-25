<template>

  <!-- <GoogleMap /> -->
  <br>
  <GooglePoint />
  <GoogleDirection />
  
</template>

<script>
// import GoogleMap from './components/GoogleMap.vue'
import GooglePoint from './components/GooglePoint.vue'
import GoogleDirection from './components/GoogleDirection.vue'

export default {
  name: 'App',
  components: {
    // GoogleMap,
    GooglePoint,
    GoogleDirection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
