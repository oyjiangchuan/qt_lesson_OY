const Koa = require('koa')
const student = new Koa();
// const manage = new Koa(); 需要用几个就new几个
// koa处理用户的请求 是一个框架 用户 request -> 中间件(位于请求和响应之间的)middleWarel1 -> middleWarel2  -> res
// 中间件 是一个方法
// http://localhost:3000/a?a=1&b=2
student.use(async (ctx, next) => { // ctx可以拿到用户的请求和响应
  console.log(ctx.path, ctx.query); // a [Object: null prototype] { a: '1', b: '2' } 输出用户请求
  ctx.body = 'hello world'; // 设置响应
  await next(); // 连接下一个中间件
  console.log('middleWarel1')
}) 
// 第二个中间件
student.use(async (ctx, next) => { // ctx可以拿到用户的请求和响应
  await next(); // await后面的代码等待下一个中间件代码执行完再执行
  console.log('middleWarel2')
}) 
// 第三个中间件
student.use(async (ctx, next) => { // ctx可以拿到用户的请求和响应
  console.log('middleWarel3')  
}) 

student.listen(3000, () => {
  console.log('server is running 3000')
})