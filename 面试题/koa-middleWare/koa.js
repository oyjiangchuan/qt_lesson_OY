// const Koa = require('koa')
const Koa = require('./myKoa')
const app = new Koa()

app.use(async (ctx, next) => { // use一次注册中间件 加载中间件
  console.log(1)
  await next()
  console.log(2)
})

app.use(async (ctx, next) => { // 加载中间件
  console.log(3)
  await next()
  console.log(4)
})

app.use(async (ctx, next) => { // 加载中间件
  console.log(5)
})

const http = require('http')
http.createServer((req, res) => {
  // 请求响应 每个请求都是先走一遍中间件
  app.run()
})