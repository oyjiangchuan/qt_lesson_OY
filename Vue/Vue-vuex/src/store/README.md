- 先看页面 再写vuex
  focus 数据流设计

- modules 
  宏观设计一个项目
  模块 对应于 vuex中的一个数据单元 每个数据单元由四大家族构成
  Store 单一状态树

  树 
  export default new Vuex.Store({ // 生成唯一的Store
    小型项目不要用vuex 很复杂
    就用组件传值  props + emit
    大型项目呢？ 使用vuex + modules
  }) 

  this.$store.products.items
  this.$store.cart.items

  namespaced: true // 添加命名空间

前后端分离
- 传统Vue 
  mounted() {
    axios /api/products/:1
    this.products = ...
  }
- vuex 
  products数据不在vuex中
  组件中 mounted() 生命周期中
  调用 actions 请求数据
  axios /api/products/:1
  mutations 修改products.all
  