import { articleList, miHuYoList } from '@/api/home'

export default ({
  namespaced: true,
  state: {
    articleList: [],
    ponAddSt: [],
    queryData: ''
  },
  getters: {
  },
  mutations: {
    SET_ARTICLE (state, res) {
      state.articleList = res
    },
    SET_PON (state, res) {
      state.ponAddSt = res
    }
  },
  actions: {
    // 获取文章列表
    async getArticle ({ commit }, data) {
      const res = await articleList({ category: data })
      commit('SET_ARTICLE', res)
    },
    async getMiHuYoList ({ commit }) {
      const res = await miHuYoList()
      commit('SET_PON', res)
    }
  },
  modules: {
  }
})
