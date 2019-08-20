import axios from 'axios';
const BASE_API = "http://localhost:3000"

const store = {
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, data) {
      state.categories = data;
    },
    pushProducts(state, data) {

    }
  },
  actions: {
    fetchProducts({ commit, state }) {
      axios(BASE_API + "/products").then(res => {
        commit("setProducts", res.data);
      })
    }
  },
  getters: {
    products(state) {
      return state.products;
    }
  }
}

export default store;