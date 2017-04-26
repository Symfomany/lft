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
  /*  var map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: 'map',
      controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} ({
          collapsible: false
        })
      }),
      view: new ol.View({
        center: [4.850000, 45.750000],
        zoom: 2
      })
    });*/

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