<template>
  <div class="subMenu">
    <span @click="change">
      <slot name="title"></slot>
      <i v-if="!isShow">+</i>
      <i v-if="isShow">-</i>
    </span>
    <li v-if="isShow">
      <slot></slot>
    </li>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    change() {
      this.isShow = !this.isShow
    }
  }
}
</script>
<style lang="stylus" scoped>
.subMenu
  span
    display block
    padding 5px
    background #4cb4e7
    color #fff
    border-bottom 1px solid #fff
    position relative
    i
      position absolute
      right 10px
      bottom 5px
      font-style normal
      font-weight bold
  li
      background #e2dbb2
</style>