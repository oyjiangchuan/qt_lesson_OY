<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <HoverZoom :smallSrc="small" :bigSrc="big"></HoverZoom>
    <!-- <Parent /> -->
  </div>
</template>

<script>
import HoverZoom from './components/HoverZoom'
import Parent from './components/Parent'
export default {
  data () {
    return {
      small: 'https://img.alicdn.com/imgextra/i3/1714128138/O1CN01K14VAw29zFjiFDawl_!!1714128138.jpg_430x430q90.jpg?tdsourcetag=s_pcqq_aiomsg',
      big: 'https://img.alicdn.com/imgextra/i3/1714128138/O1CN01K14VAw29zFjiFDawl_!!1714128138.jpg?tdsourcetag=s_pcqq_aiomsg'
    }
  },
  name: 'App',
  components: {
    HoverZoom,
    Parent
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
