<template>
  <div>
    <MyChild />
  </div>
</template>

<script>
import MyChild from './Child'
export default {
  data () {

  },
  components: {
    MyChild
  },
  provide() {
    return {
      theme: 'red'
    }
  }
}
</script>

<style>

</style>