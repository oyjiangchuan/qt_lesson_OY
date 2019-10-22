// const { promisify } = require('util') // 把原生的api转换成promise风格的
const fs = require('fs')

function promisify(fn) {
  return function(...arg) {
    return new Promise((resolve, reject) => {
      // fn === fs.readFile
      // fs.readFile('', '', (err, data) => {
      //   if (err) reject(err)
      //   else resolve(data)
      // })
      fn(...arg, (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    })
  }
}

const readFile = promisify(fs.readFile)
readFile('./a.txt', 'utf8').then(res => console.log(res))