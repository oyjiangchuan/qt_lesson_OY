// let http = require('http')

// let server = http.createServer((req, res) => {
//   res.end('hello world')
// })

// server.listen(3000, () =>{
//   console.log('server is running http://localhost:3000')
// })


// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'holle world!!!'
// })

// app.listen(3000, () => {
//   console.log('server is running http://localhost:3000')
// })

let myKoa = require('./lib/application')
let app = new myKoa()

app.use((ctx, next) => {
  // console.log(ctx.req.url)
  // console.log(ctx.request.req.url)
  // console.log(ctx.response.req.url)
  // console.log(ctx.request.url)
  // console.log(ctx.request.path)
  // console.log(ctx.url)
  // console.log(ctx.path)
  // res.end('hello world????')
  ctx.body = 'hello world'
  console.log(ctx.body)
  next()
})


// app.use((ctx, next) => {
//   console.log(1)
//   next() /* 执行下一个use */
//   console.log(2)
// })

// app.use((ctx, next) => {
//   console.log(3)
//   next()
//   console.log(4)
// })

// app.use((ctx, next) => {
//   console.log(5)
//   next()
//   console.log(6)
// })

// 1 3 5 6 4 2


app.listen(3001, () => {
  console.log('server is running http://localhost:3001')
})

