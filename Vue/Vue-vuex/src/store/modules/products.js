import shop from '@/api/shop'

const state = {
  all: []
}

const getters = {}

const mutations = {
  get(state, products) { // 第一个参数是state 可以修改state
    state.all = products
  }
}

const actions = {
  // vuex 给actions 的 commit 提交到 mutations => state
  getAllProducts({ commit }) {
    // 所有的api请求都放在actions中
    shop.getProducts((products) => {
      console.log('前端到api, callback 回来了', products)

      commit('get', products)
    })
    // mutations 来改变 actions不能改变状态state
  }
}

export default {
  namespaced: true, // 添加命名
  state,
  getters,
  mutations,
  actions
}