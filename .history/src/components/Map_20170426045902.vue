<template>
  <div class="list">
    <h1>Carte</h1>
    <div id="demoMap" style="height:250px"></div>

</div>
</template>

<script>
  var map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'map',
    controls: ol.control.defaults({
      attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
        collapsible: false
      })
    }),
    view: new ol.View({
      center: [0, 0],
      zoom: 2
    })
  });

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