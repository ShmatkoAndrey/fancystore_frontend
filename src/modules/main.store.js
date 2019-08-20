import axios from 'axios';
const BASE_API = "http://localhost:3000"

const store = {
  state: {
    categories: [],
  },
  mutations: {
    setCategories(state, data) {
      state.categories = data;
    }
  },
  actions: {
    fetchCategories({ commit, state }) {
      axios(BASE_API + "/categories").then(res => {
        commit("setCategories", res.data);
      })
    }
  },
  getters: {
    categories(state) {
      return state.categories;
    }
  }
}

export default store;