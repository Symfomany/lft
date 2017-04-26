<template>
  <div id="osm-map"></div>
</template>

<script>

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
  #osm-map{
    width: 500px;
    height: 350px;
  }
</style>