<template>
  <div class="list">
    <h1>Carto</h1>
    <l-map :zoom="zoom" :center="center" :min-zoom="minZoom" :max-zoom="maxZoom">
      <l-tilelayer :url="url" :attribution="attribution"></l-tilelayer>
      <l-marker :position="center" :title="title" :opacity="opacity" :draggable="false">
        <l-tooltip content="a tooltip"></l-tooltip>
      </l-marker>
      <l-marker :position="center" :title="title" :opacity="opacity" :draggable="false">
        <l-popup content="a popup"></l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
  // Where you want to render the map.
  var element = document.getElementById('osm-map');

  // Height has to be set. You can do this in CSS too.
  element.style = 'height:300px;';

  // Create Leaflet map on map element.
  var map = L.map(element);

  // Add OSM tile leayer to the Leaflet map.
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Target's GPS coordinates.
  var target = L.latLng('47.50737', '19.04611');

  // Set map's center to target with zoom 14.
  map.setView(target, 14);

  // Place a marker on the same location.
  L.marker(target).addTo(map);
  /*
    document.getElementById('zoom-out').onclick = function () {
      var view = map.getView();
      var zoom = view.getZoom();
      view.setZoom(zoom - 1);
    };
  
    document.getElementById('zoom-in').onclick = function () {
      var view = map.getView();
      var zoom = view.getZoom();
      view.setZoom(zoom + 1);
    };
  */
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

</style>