CPU + 存储 + IO
sample.txt 在存储器上 => 使用时由CPU读到内存中 => 可以输出到屏幕, 命令行
CPU 发送 write 指令 => 存储器  流操作

- require('fs/zlib') 模块化
  require('./self')
- pipe 流操作的抽象
  createReadStream
  createWriteStream
  pipe
- 超越浏览器 node后端

- const fs = require('fs'); // 文件模块fs(系统内置模块,用于读取文件)require 模块引入机制,node.js中有八大常用模块
  const zlib = require('zlib'); // 文件的压缩模块
  const http = require('http'); // http模块

- fs.createReadStream('./sample.txt') // 创建一个可读流
  .pipe(process.stdout); // 构建一个管道 process.stdout输出设备的一种  交互 process单线程当前的,stdout输出设备
  fs.createReadStream('./sample.txt.gz')// 创建一个可写流,将什么写入sample.txt.gz文件中



- fecth方法获取接口数据,和jquiry中的ajax相同作用
  fetch('/userinfo')  // 数据的地址 
  .then(data => data.json()) // 将数据转化json格式
  .then(data => {
      console.log(data);
  })
