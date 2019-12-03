<template>
  <div id="app">
    <Nav v-if="isShowNav"></Nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
// import Component from "vue-class-component"; Component的另外一种引入方法
import Nav from "@/components/nav.vue";
@Component({
  components: {
    Nav
  }
})
export default class App extends Vue {
  private isShowNav: boolean = false
  @Watch('$route')
  routeChange(newVal: boolean, oldVal) {
    
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
