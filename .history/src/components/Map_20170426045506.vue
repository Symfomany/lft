<template>
  <div class="list">
    <h1>Carte</h1>
    <div id="demoMap" style="height:250px"></div>
<ol-map></ol-map>
</div>
</template>

<script>


  export default {
    name: 'map',
    components: { olMap: olMap },
    data() {
      return {
        msg: 'Lyon French Tech'
      }
    }
  }
</script>

<style scoped>

</style>