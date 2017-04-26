<template>
  <div class="list">
    <h1>Carte</h1>
    <div id="demoMap" style="height:250px"></div>

</div>
</template>

<script>
  map = new OpenLayers.Map("demoMap");
  map.addLayer(new OpenLayers.Layer.OSM());
  map.zoomToMaxExtent();
  var mapnik = new OpenLayers.Layer.OSM();
  var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
  var toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection

  var position = new OpenLayers.LonLat(4.850000, 45.750000).transform(fromProjection, toProjection);
  var zoom = 15;

  map.setCenter(position, zoom);

  export default {
    name: 'map',
    data() {
      return {
        msg: 'Lyon French Tech'
      }
    }
  }
</script>

<style scoped>

</style>