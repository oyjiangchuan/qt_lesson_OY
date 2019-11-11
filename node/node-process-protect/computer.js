const http = require('http')
const { fork } = require('child_process') // 复制一个子进程

const httpServer = http.createServer((req, res) => {
  if (req.url === '/computer') {
    const childComputer = fork('./forkComputer.js')
    childComputer.send('open') // 子进程和主进程通信
    childComputer.on('message', sum => { // 接收到子进程完成的信息
      res.end(sum.toString())
    })

    console.log(1)
    console.log(2)
  } else {
    res.end('ok')
  }
})

httpServer.listen(3000, () => {
  console.log('server is running 3000')
})