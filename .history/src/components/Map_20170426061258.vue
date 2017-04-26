<template>
  <div>
    <div id="map"></div>
    <a @click="add">Cliquez-ici </a>
  </div>
</template>


<script>



  export default {
    name: 'map',

    created() {


    },
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
      add() {
        var center = { lat: 45.740000, lng: 4.840000 };

        var marker = new google.maps.Marker({
          position: center,
          map: map,
          title: 'Hello Man!'
        });
      }
    }
  }
</script>

<style>
  #map {
    width: 500px;
    height: 350px;
  }
</style>