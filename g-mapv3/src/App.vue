<template>

  <!-- <GoogleMap /> -->
  <br>
  <GooglePoint />
  
</template>

<script>
// import GoogleMap from './components/GoogleMap.vue'
import GooglePoint from './components/GooglePoint.vue'

export default {
  name: 'App',
  components: {
    // GoogleMap,
    GooglePoint
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
