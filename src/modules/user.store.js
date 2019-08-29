import axios from 'axios';
const BASE_API = "http://localhost:3000"

const store = {
  state: {
    current_user: null,
    token: null,
    exp_data: null
  },
  mutations: {
    setCurrentUser(state, data) {
      state.current_user = data;
    },
    setToken(state, data) {
      state.token = data.token;
      state.exp_data = data.exp_data;
    }
  },
  actions: {
    fetchCurrentUser({state, commit}) {
      if(state.token)
        axios(BASE_API + "/current_user", {
          headers: {
            'Authorization': state.token
          }
        }).then(res => {
          console.log(res)
        })
    },
    login({state, commit}, data) {
      axios.post(BASE_API + "/auth/login", data).then(res => {
        localStorage.setItem('token', res.data.token)
        commit("setToken", res.data)
      })
    },
    registration({state, commit}, data) {
      axios.post(BASE_API + "/users", data).then(res => {
        console.log(res);
      })
    },
    logout({state, commit}) {

    },
    setToken({state, commit}, data) {
      commit("setToken", data)
    }
  },
  getters: {
    current_user(state) {
      return state.current_user;
    }
  }
}

export default store;