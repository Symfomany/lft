import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Map from '@/components/Map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
