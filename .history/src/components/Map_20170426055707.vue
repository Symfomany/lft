<template>
  <div id="map"></div>
</template>

<script>




  export default {
    name: 'map',
    data() {
      return {
        zoom: 9,
        center: { lat: 45.750000, lng: 4.850000 },
        markers: [{
          position: { lat: 45.750000, lng: 4.850000 },
          infoText: 'Marker 1'
        }, {
          position: { lat: 11.0, lng: 11.0 },
          infoText: 'Marker 2'
        }],


      }
    },
    methods: {

    }
  }
</script>

<style scoped>

  #map {
        width: 500px;
    height: 350px;
      }
</style>