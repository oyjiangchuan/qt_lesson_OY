let hppt  = require('http') // 引入http模块创建 web服务器
let fs = require('fs') // 引入fs模块 操作服务器的资源文件

let server = hppt.createServer() // 创建服务
server.on('request', (req, res) => { // 请求资源
  let url = req.url
  if (url === '/') {
    fs.readFile('./resource/index.html', (error, data) => {
      if (error) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8') // 设置请求头
        res.end('你要的资源不存在,请稍后再试') // 返回的请求内容
      } else {
        res.setHeader('Content-Type', 'text/html; charset=utf-8') // 设置请求头
        res.end(data)
      }
    })
  } else if (url === '/img') {
    fs.readFile('./resource/hy.jpg', (error, data) => {
      if (error) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8') // 设置请求头
        res.end('你要的资源不存在,请稍后再试') // 返回的请求内容
      } else {
        res.setHeader('Content-Type', 'image/jpeg') // 设置请求头
        res.end(data)
      }
    })
  }
})

server.listen(3000, () => { // 监听服务器的端口
  console.log('服务器已启动, 可以访问了...')
})
