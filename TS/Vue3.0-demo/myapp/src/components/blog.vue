<template>
  <div class="blogpost" :class="{heighLigthed: post.heighLigthed}">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
    <p class="meta">written by {{post.author}} on {{date}}</p>
    <p v-if="post.heighLigthed">This post is highLigthed!</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
export interface Post { // 创建Post接口
  title: string;
  body: string;
  author: string;
  datePosted: Date;
  heighLigthed?: boolean;
}
@Component
export default class BlogPost extends Vue {  // BlogPost组件从父组件接收props post类型为Post描述的接口类型
  @Prop() private post!: Post  // post!必须有 post?可能没有 

  get date() { // 方法前加get 调用时不需要加括号 不可以写成data
    return `${this.post.datePosted.getDate()}/${this.post.datePosted.getMonth()}/${this.post.datePosted.getFullYear()}`
  }
}
</script>

<style lang="stylus">
.blogpost
  &.heighLigthed
    border 1px solid #f4d942
    background #fff3b2
  h2
    text-decoration underline
  .meta
    font-style italic
</style>