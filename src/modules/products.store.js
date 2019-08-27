import axios from 'axios';
const BASE_API = "http://localhost:3000"

const store = {
  state: {
    products: [],
    shops: []
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    pushProducts(state, data) {

    },
    setShops(state, data) {
      state.shops = data;
    },
    setProductImagesInShop(state, data) {
      let shop = state.shops.find(sh => sh.id === data.id);
      shop["product_images"] = data.images;
      state.shops = [...state.shops.filter(e => e.id !== shop.id), shop];
    }
  },
  actions: {
    fetchProducts({ commit, state }) {
      axios(BASE_API + "/products").then(res => {
        commit("setProducts", res.data);
      })
    },
    fetchShops({ commit, state, dispatch }) {
      axios(BASE_API + "/shops").then(res => {
        commit("setShops", res.data);
        dispatch("fetchShopImages");
      })
    },
    fetchShopImages({ commit, state }) {
      state.shops.forEach((sh) => {
        axios(BASE_API + "/product-images/" + sh.id).then((shres) => {
          commit("setProductImagesInShop", {id: sh.id, images: shres.data})
        })
      })
    },
    fetchProduct({commit, state}, id) {
      return new Promise((resolve, reject) => {
        axios(BASE_API + "/products/" + id).then(res => {
          resolve(res.data);
        })
      })
    }

  },
  getters: {
    products(state) {
      return state.products;
    },
    shops(state) {
      return state.shops;
    }
  }
}

export default store;