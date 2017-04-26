<template>
  <div class="list">
    <h1>Carte</h1>
  </div>
</template>

<script>
  map = new OpenLayers.Map("demoMap");
  map.addLayer(new OpenLayers.Layer.OSM());
  map.zoomToMaxExtent();
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