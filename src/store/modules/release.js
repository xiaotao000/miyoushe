import reWgyh from '@/api/release'

export default ({
  state:{
    reWgyh:[]
  },
  getters:{},
  mutations:{
    SET_ARTICLE (state, res) {
      state.reWgyh = res
    }
  },
  actions:{
    reget ({ commit }, data){
      console.log(data)
      const res = await reWgyh({ category: data})
      commit ('SET_ARTICLE',res)
    }
  }
})
