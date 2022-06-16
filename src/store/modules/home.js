import { articleList } from '@/api/home'

export default ({
  namespaced: true,
  state: {
    articleList: [],
    queryData: ''
  },
  getters: {
  },
  mutations: {
    SET_ARTICLE (state, res) {
      state.articleList = res
    }
  },
  actions: {
    // 获取文章列表
    async getArticle ({ commit }, data) {
      console.log(data)
      const res = await articleList({ category: data })
      commit('SET_ARTICLE', res)
    }
  },
  modules: {
  }
})
