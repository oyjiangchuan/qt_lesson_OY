import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  // tmall 商城
  // 设计数据中心 模块
  // 卖货 products
  // 购物车 cart 物品的状态
  modules: { // 分模块
    cart,
    products
  }
})