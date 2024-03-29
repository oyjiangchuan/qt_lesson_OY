const cpus = require('os').cpus()
const net = require('net')
const socketServer = net.createServer()
const { fork } = require('child_process')
socketServer.listen(3333, () => {
  console.log('server is running')
})
console.log('length', cpus.length)

for (let i = 0; i < cpus.length; i++) {
  createWorker()
}

function createWorker() {
  const work = fork('./work.js')
  work.on('message', function(msg) {
    const { act } = msg
    if (act === 'dead') {
      createWorker()
    }
  })
  work.send('server', socketServer)
  console.log('work process created')
}

