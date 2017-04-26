<template>
  <gmap-map :center="{lat:10, lng:10}" :zoom="7" map-type-id="terrain" style="width: 500px; height: 300px" >
</gmap-map>
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps';


  export default {
    name: 'map',

    data() {
      return {
        zoom: 9,
        center: [4.850000, 45.750000],
        minZoom: 5,
        maxZoom: 5,
        opacity: 0.8,
        title: "cool",
        url: "http://www.free.fr",
        msg: 'Lyon French Tech',
        attribution: 'No attr'
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