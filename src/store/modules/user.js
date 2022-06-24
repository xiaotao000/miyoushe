import { reqRegister, getUser, Logon } from '@/api/user'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/userToken'

export default ({
  namespaced: true,
  state: {
    token: GET_TOKEN() || '',
    userInfo: {},
    IsDialog: false
  },
  getters: {
  },
  mutations: {
    SET_TOKEN (state, data) {
      state.token = data
    },
    SET_USERINFO (state, info) {
      state.userInfo = info
    },
    RESET_STATE (state) {
      state.token = ''
      state.userInfo = {}
      REMOVE_TOKEN()
    },
    SET_STATE (state, ter) {
      state.IsDialog = ter
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
      console.log(res.is_delete)
      commit('SET_USERINFO', res)
    },
    // 退出登录
    logout ({ commit }) {
      commit('RESET_STATE')
    },
    // 修改完善信息弹出的状态
    modifyState ({ commit }, data) {
      commit('SET_STATE', data)
    },
    // 登录
    async logon ({ commit, dispatch }, data) {
      const res = await Logon(data)
      commit('SET_TOKEN', res)
      SET_TOKEN(res.token)
      dispatch('getUserInfo')
    }
  },
  modules: {
  }
})
