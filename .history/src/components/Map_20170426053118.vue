<template>
  <gmap-map :center="{lat:45.750000, lng:4.850000}" :zoom="11" map-type-id="terrain" style="width: 500px; height: 300px" >
<gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="false" @click="center=m.position"></gmap-marker>
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
          position: { lat: 45.750000, lng: 4.850000 },
          infoText: 'Marker 1'
        }, {
          position: { lat: 11.0, lng: 11.0 },
          infoText: 'Marker 2'
        }],
        methods: {
          toggleInfoWindow: function (marker, idx) {

            this.infoWindowPos = marker.position;
            this.infoContent = marker.infoText;

            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
              this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
              this.infoWinOpen = true;
              this.currentMidx = idx;

            }
          }
        }

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