<template>
  <gmap-map :center="{lat:45.750000, lng:4.850000}" :zoom="9" map-type-id="terrain" style="width: 500px; height: 300px" >
<gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
</gmap-map>
</template>

<script>

  export default {
    name: 'map',

    data() {
      return {
        zoom: 9,
        center: [4.850000, 45.750000],
        markers: [{
          position: { lat: 10.0, lng: 10.0 }
        }, {
          position: { lat: 11.0, lng: 11.0 }
        }]

      }
    }
  }
</script>

<style scoped>
  #osm-map{
    width: 500px;
    height: 350px;
  }
</style>