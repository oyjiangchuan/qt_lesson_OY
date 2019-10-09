<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{product.title}} - {{product.price}}
      <br>
      <button>Add to cart</button>
      </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  // data () { // 使用了vuex 不需要data了 这只是组件的自身状态 不好共享 私有的在多个使用它的状态里 变得不一致
  //   return {
  //     products: []
  //   }
  // }

  // 组件数据的来源
  computed: mapState({
    products: state => state.products.all
  }),
  created () {
    // dispatch() 派发动作的概念
    // 组件不再接触数据了 连api都不

    this.$store.dispatch('products/getAllProducts')
    // dispatch：含有异步操作，数据提交至 actions ，可用于向后台提交数据
    // commit：同步操作，数据提交至 mutations ，可用于登录成功后读取用户信息写到缓存里
  }
}
</script>

<style scoped>

</style>