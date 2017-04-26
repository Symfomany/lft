<template>
  <div>
    <div id="map"></div>
    <a @click="add">Cliquez-ici </a>
  </div>
</template>


<script>

  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 45.750000, lng: 4.850000 },
    zoom: 9,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
      }
    ]
  });


  export default {
    name: 'map',
    created() {
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