const http = require('http')
const EventEmitter = require('events')
const Stream = require('stream')

const context = require('./context')
const request = require('./request')
const response = require('./response')

class myKoa extends EventEmitter{
  constructor () {
    super()
    this.middlewares = [] // 中间件 里面保存的是所有的回调
    this.fn
    this.context = context
    this.request = request
    this.response = response
  }

  // 创建ctx
  createContext (req, res) {
    // 通过Object.create 创建对象是为了继承 this.context，但是在增加属性时不影响原对象
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)

    ctx.req = request.req = response.req = req
    ctx.res = request.res = response.res = res

    request.ctx = response.ctx = ctx
    request.response = response
    response.request = request
    return ctx
  }

  // 处理请求
  handleRequest(req, res) { // 处理请求
    res.statusCode = 404
    let ctx = this.createContext(req, res)
    let fn = this.compose(this.middlewares, ctx)
    fn.then(() => {
      if (typeof ctx.body === 'object') {
        res.setHeader('Content-Type', 'application/json;charset=utf8')
        res.end(JSON.stringify(ctx.body))
      } else if (ctx.body instanceof Stream) {
        ctx.body(res)
      } else if (typeof ctx.body === 'string' || Buffer.isBuffer(ctx.body)) { // base64
        res.setHeader('Content-Type', 'text/html;charset=utf8')
        res.end(ctx.body)
      } else {
        res.end('Not Found')
      }
    }).catch((err) => {
      this.emit('error', err)
      res.statusCode = 500
      res.end('server error')
    })
    // this.fn(ctx) // 调用用户给的回调把ctx还给用户使用
    // res.end(ctx.body) // ctx.body用来输出到页面
  }

  use (fn) {
    // this.fn = fn
    this.middlewares.push(fn)
  }

  compose (middlewares, ctx) {
    function dispatch(index) {
      if (index === middlewares.length) return
      let middleware = middlewares[index]
      return Promise.resolve(middleware(ctx, () => dispatch(index + 1)))
    }
    return dispatch(0)
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this)) // 确保handleRequest 中的this指向myKoa
    server.listen(...args)
  }
}

module.exports = myKoa
