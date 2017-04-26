<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Carte</router-link>
      </li>
      <li>
        <router-link to="/list">Liste</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>

</style>