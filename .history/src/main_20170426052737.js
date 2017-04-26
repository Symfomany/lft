// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false

/**
 * Configuration of Vue Ressource
 */
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBC9kR7yZ1y3lXeu9t-YPkKoy4pF1KPPcg',
    // libraries: 'places', //// If you need to use place input
  }
});

/**
 * Configuration of Vue Ressource
 */
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
