<template>
  <div id="app" class="container">
    <Nav v-if="isShowNav"></Nav>
    <div class="layout">
      <router-view />
      <Slider class="silder" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
// import Component from "vue-class-component"; Component的另外一种引入方法
import Nav from "@/components/nav.vue";
import Slider from "@/components/Slider.vue";
@Component({
  components: {
    Nav,
    Slider
  }
})
export default class App extends Vue {
  private isShowNav: boolean = false;
  @Watch("$route")
  routeChange(newVal, oldVal) {
    // console.log(newVal, oldVal)
    if (newVal.path === "/") {
      this.isShowNav = false;
    } else {
      this.isShowNav = true;
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 61px;
  .layout {
    display: flex;
    justify-content: space-evenly;
    .silder {
      flex: 0 0 250px;
    }
  }
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