import axios from 'axios';
const BASE_API = "http://localhost:3000"

const store = {
  state: {
    current_user: null,
    token: null
  },
  mutations: {
    setCurrentUser(store, data) {
      store.current_user = data;
    }
  },
  actions: {
    fetchCurrentUser({state, commit}) {
      axios(BASE_API + "/current_user/" + token).then(res => {
        console.log(res)
      })
    },
    login({state, commit}, data) {
      axios.post(BASE_API + "/login", {
        email: data.email,
        password: data.password
      }).then(res => {
        console.log(res);
      })
    },
    registration({state, commit}, data) {

    },
    logout({state, commit}) {

    }
  },
  getters: {
    current_user(state) {
      return state.current_user;
    }
  }
}

export default store;