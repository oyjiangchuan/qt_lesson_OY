const forkComputer = () => {
  let sum = 0
  for (let i = 0; i < 10000000000; i++) {
    sum += i
  }
  return sum
}

process.on('message', msg => { // 接收到主进程send的信息
  console.log(msg)
  const sum = forkComputer()
  process.send(sum)
})