const http = require('http')
const httpServer = http.createServer((req, res) => {
  res.end('http res')
  throw new Error('error')
})
process.on('message', function (name, socketServer) {
  if (name === 'server') {
    socketServer.on('connection', (socket) => {
      httpServer.emit('connection', socket)
    })
  }
})
// window.on('error')  无论代码在哪里出错 window.on('error') 都可以捕获到该错误
process.on('uncaughtException', (err) => {
  console.log(err)
  process.send({ act: 'dead' })
})