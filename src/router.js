import Vue from 'vue'
import Router from 'vue-router'
import Store from './views/Store.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'store',
      component: Store
    },
  ]
})
