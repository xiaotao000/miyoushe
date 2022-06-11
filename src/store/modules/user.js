import { reqRegister } from '@/api/user'
import { SET_TOKEN } from '@/utils/userToken'

export default ({
  namespaced: true,
  state: {
    toke: '',
    userInfo: {}
  },
  getters: {
  },
  mutations: {
    SET_TOKEN (state, data) {
      state.token = data
    }
  },
  actions: {
    // 注册用户
    async register ({ commit }, data) {
      const res = await reqRegister(data)
      commit('SET_TOKEN', res)
      SET_TOKEN(res.token)
    }
  },
  modules: {
  }
})
