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
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#FFFAF0"
              }
            ]
          },
          {
            "featureType": "water",
            "stylers": [
              {
                "color": "#d9edf7"
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
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "lightness": 40
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "on",
                "color": "#c5dac6"
              }
            ]
          },
          {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#CCAA88"
              },
              {
                "lightness": 40
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#EEEEEE"
              }
            ]
          },
          {
            "featureType": "road",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "color": "#FF0000"
              },
              {
                "gamma": 9
              }
            ]
          },
          {
            "featureType": "road.highway",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#FF0000"
              },
              {
                "gamma": 8
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#FF0000"
              },
              {
                "gamma": 4
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
            "featureType": "poi.government",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#DDDDDD"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#CCCCCC"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#AAAAAA"
              },
              {
                "gamma": 4
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