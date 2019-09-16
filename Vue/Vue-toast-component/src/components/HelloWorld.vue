<template>
  <div>
    <button @click="change">购买</button>
    <!-- <Toast msg='测试弹窗一' :visiable='visiable'/> -->
  </div>
</template>

<script>
// import Toast from './Toast/index'
import showMessage from './Toast/index.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      visiable: false
    }
  },
  // components: {
  //   Toast
  // },
  methods: {
    change () {
    //   this.visiable = true
    //   if (this.visiable) {
    //     setTimeout(() => {
    //       this.visiable = false
    //     }, 3000)
    //   }
    // }
    showMessage('没到开售事件');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
