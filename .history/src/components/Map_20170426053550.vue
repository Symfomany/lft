<template>
  <gmap-map :center="{lat:45.750000, lng:4.850000}" :zoom="11" map-type-id="terrain" style="width: 500px; height: 300px" >
<gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="false" @click="toggleInfoWindow(m,i)"></gmap-marker>
</gmap-map>
</template>

<script>

  export default {
    name: 'map',

    data() {
      return {
        zoom: 9,
        center: { lat: 45.750000, lng: 4.850000 },
        infoContent: '',
        infoWindowPos: {
          lat: 0,
          lng: 0
        },
        infoWinOpen: false,
        currentMidx: null,
        //optional: offset infowindow so it visually sits nicely on top of our marker
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        markers: [{
          position: { lat: 45.750000, lng: 4.850000 },
          infoText: 'Marker 1'
        }, {
          position: { lat: 11.0, lng: 11.0 },
          infoText: 'Marker 2'
        }],


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