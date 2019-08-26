import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import main from './modules/main.store'
import products from './modules/products.store'

export default new Vuex.Store({
  modules: {
    main,
    products
  }
})
