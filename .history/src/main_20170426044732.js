// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
const VueOpenLayers = require("vue-openlayers/src/main");

Vue.use(VueOpenLayers);


/**
 * Configuration of Vue Ressource
 */
import VueResource from 'vue-resource'
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
