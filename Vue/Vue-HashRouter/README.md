- 链接带来了页面的互联
  一切皆资源  链接表示 URL
  传统的页面加载 页面重新刷新  坏事 页面只需要刷新某些部分 不需要全部刷新 体验有点差
  SPA  Single Page Application (单页应用-头部和底部侧栏不变) Vue思想

## 路由的做法 vue-router 会用不算什么 框架的实现
- 单页应用的结构
  不再是n个页面了 只有一个页面了(分为不动的部分和动的部分)
  不动的部分  nav a #/page1 
  #/page1 path 页面切换的  锚链接(路由的底层之一)
  URL 改变了的事件 container 元素里 动态实现DOM
  锚链接用于大型页面 方便跳转(不刷新页面的可能性)
  锚链接让点击链接 不跳转页面成为可能行#/page1  #开头  在一个标签中设置name="/page1" 即可


  路由接管一切 new HashRouter()
  constructor 订阅了hashchange事件

- 新的前端世界在打开 要有新的次序
  管住所有路由  #/page  HashRouter 
  hash => cb() // container 显示;
  class HashRouter
  this.routers = {}
  向外提供一个 register(hash, callback = fnction() {}) 方法
  Load
  window.addEventListener('hashchange', this.Load.bind(this))

  call, apply es5 手动指定函数内部this的API
  bind this 一样 , 返回一个新的函数  适合事件执行时
