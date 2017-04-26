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
  var position = new OpenLayers.LonLat(13.41, 52.52).transform(fromProjection, toProjection);
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