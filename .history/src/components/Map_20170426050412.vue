<template>
  <div class="list">
    <h1>Carte</h1>
    <a class="skiplink" href="#map">Go to map</a>

    <div id="map" class="map" tabindex="0"></div>
    <button id="zoom-out">Zoom out</button>
    <button id="zoom-in">Zoom in</button>

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
      center: [4.850000, 45.750000],
      zoom: 2
    })
  });

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
        msg: 'Lyon French Tech'
      }
    }
  }
</script>

<style scoped>
  #map{
    width: 500px;
    height: 350px;
  }
a.skiplink {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0;
        border: 0;
        height: 1px;
        width: 1px;
        overflow: hidden;
      }
      a.skiplink:focus {
        clip: auto;
        height: auto;
        width: auto;
        background-color: #fff;
        padding: 0.3em;
      }
      #map:focus {
        outline: #4A74A8 solid 0.15em;
      }
</style>