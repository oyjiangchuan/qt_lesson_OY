## http

中台
后端的服务 越来越往后靠 越来越纯
提供数据：现在的提供数据是 提供(api) -> 返回(json)

## thrift 
调用方 自己去写
node 支持

## SSR
能够解决 SPA(单页Web应用) 的问题 
需要 node 支持

## Koa ctx
  ctx: { 是一个对象 里面有用户的请求和返回
    req,
    res
  }
  
  第三方的中间件 都是 对ctx 的继续增强
  在koa-body中
  可以拿到 ctx.request.files
  再如 koa-view
  可以有ctx.response.render()
