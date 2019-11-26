<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <button @click="toggle">Show/Hide heighLigthed post</button>
    <BlogPost :post="blogPost" v-for="blogPost in visibleBlogPosts" :key="blogPost.title" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import BlogPost, { Post } from './components/blog.vue'
import axios from 'axios'
import { AxiosResponse } from  'axios' // 限定返回的数据格式

@Component({
  components: {
    HelloWorld,
    BlogPost
  },
})

export default class App extends Vue {
  private blogPosts: Post[] = [
    {
			title: 'My first blogpost ever!',
			body: 'Lorem ipsum dolor sit amet.',
			author: 'Elke',
			datePosted: new Date(2019, 1, 18)
		},
		{
			title: 'Look I am blogging!',
			body: 'Hurray for me, this is my second post!',
			author: 'Elke',
			datePosted: new Date(2019, 1, 19)
		},
		{
			title: 'Another one?!',
			body: 'Another one!',
			author: 'Elke',
      datePosted: new Date(2019, 1, 20),
      heighLigthed: true
		}
  ]

  public showHeighlighted: boolean = true

  get visibleBlogPosts() {
    return this.blogPosts.filter((post: Post) => {
      return post.heighLigthed === undefined || post.heighLigthed === this.showHeighlighted
    })
  }

  public toggle() {
    this.showHeighlighted = !this.showHeighlighted
  }

  // public created() { // 生命周期函数
  //   this.axios.get('/request.json').then((res: AxiosResponse) => { // 本地请求是默认请求public下的文件
  //     console.log(res)
  //     this.blogPosts = res.data.blogposts.map((val: any) => ({
  //       title: val.title,
  //       body: val.body,
  //       author: val.author,
  //       datePosted: val.datePosted,
  //       heighLigthed: val.highlighted
  //     }))
  //   })
  // }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
