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
    mounted() {
      // Styles a map in night mode.
      var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 45.750000, lng: 4.850000 },
        zoom: 13,
        styles: [
          {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
              {
                "color": "#444444"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "saturation": "-100"
              },
              {
                "lightness": "30"
              }
            ]
          },
          {
            "featureType": "administrative.neighborhood",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "gamma": "0.00"
              },
              {
                "lightness": "74"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "color": "#ff0000"
              },
              {
                "saturation": "-15"
              },
              {
                "lightness": "40"
              },
              {
                "gamma": "1.25"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ff0000"
              },
              {
                "lightness": "80"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#efefef"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ]
      });


      var myLatLng = { lat: 45.750000, lng: 4.850000 };

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      });
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