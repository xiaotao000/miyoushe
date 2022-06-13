import { reqRegister, getUser } from '@/api/user'
import { SET_TOKEN, GET_TOKEN } from '@/utils/userToken'

export default ({
  namespaced: true,
  state: {
    toke: GET_TOKEN() || '',
    userInfo: {}
  },
  getters: {
  },
  mutations: {
    SET_TOKEN (state, data) {
      state.token = data
    },
    SET_USERINFO (state, info) {
      state.userInfo = info
    }
  },
  actions: {
    // 注册用户
    async register ({ commit }, data) {
      const res = await reqRegister(data)
      commit('SET_TOKEN', res)
      SET_TOKEN(res.token)
    },
    // 获取用户信息
    async getUserInfo ({ commit }) {
      const res = await getUser()
      commit('SET_USERINFO', res)
    }
  },
  modules: {
  }
})
