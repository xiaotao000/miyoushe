import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import home from './modules/home'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user, home
  }
})
