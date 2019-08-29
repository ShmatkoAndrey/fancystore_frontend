import Vue from 'vue'
import Router from 'vue-router'

import Store from './views/Store.vue'
import Product from './views/Product.vue'
import Login from './views/Login.vue'

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
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
