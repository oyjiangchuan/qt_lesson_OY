<template>
  <div id="id">
    <img src="./assets/1.jpg" alt="">
    <router-link to="/login">登录</router-link>
    <router-link to="/">首页</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
body {
  height: 500px;
  background: red;
  #id{
    background: #eee;
  }
}
</style>