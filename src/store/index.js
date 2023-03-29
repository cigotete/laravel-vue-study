import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    auth: null
  },
  getters: {
  },
  mutations: {
    setAuth(state, auth) {
      state.auth = auth
    },
    clearAuth(state) {
      state.auth = null
    }
  },
  actions: {
    setAuth ({ commit }) {
      if (localStorage.getItem('auth')) {
        commit('setAuth', JSON.parse(localStorage.getItem('auth')));
      }
    },

    logout({ commit }) {
      localStorage.removeItem('auth');
      commit('clearAuth')
      router.push('/login');
    }
  },
  modules: {
  }
})
