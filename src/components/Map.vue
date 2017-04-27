<template>
  <div>
    <div id="map"></div>
  </div>
</template>


<script>

  export default {
    name: 'map',

    created() {
      this.$http.get('https://jumplyn.com/api/v2/lft/formations?token=lft&flatten').then(function(reponse){
        this.markers = reponse.body;
        this.loadMarkers();
      });
    },
    mounted() {
      // Styles a map in night mode.
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 45.750000, lng: 4.850000 }, // get center of the map
        zoom: 13, // zoom map
        disableDefaultUI: true, //disabled controls
        styles: [ // all map styles : https://snazzymaps.com/
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


    },
    data() {
      return {
        map: null,
        markers: []
      }
    },
    methods: {
      loadMarkers() {
          for(let marker of this.markers){
            this.addMarker(marker);
            break;
          }
      },
      addMarker(marker) {
        // console.log(marker);
        let  address = marker.informations.adresse.postale;
        let geocoder = new google.maps.Geocoder();
        console.log(marker)
        let mapObject = this.map;
        geocoder.geocode({ 'address': address}, function(results, status) {
           if (status === 'OK') {
             console.log()
            mapObject.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: mapObject,
              position: results[0].geometry.location
            });
          } else {
            console.error('Geocode was not successful for the following reason: ' + status);
          }
        });

        // var myLatLng = { lat: 45.750000, lng: 4.850000 };
        // var marker = new google.maps.Marker({
        //   position: myLatLng,
        //   map: map,
        //   title: 'Hello World!'
        // });
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