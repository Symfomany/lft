// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'


import VueResource from 'vue-resource'
// import VueLeaflet from 'vueleaflet'
import VueLeaflet from './index.js'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    VL: VueLeaflet.store,
  }
});

Vue.use(VueLeaflet.plugin, store);



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
