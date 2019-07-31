const fs = require('fs'); // 文件模块fs(系统内置模块,用于读取文件)
// require 模块引入机制,node.js中有八大常用模块
// IO
fs // 创建一个可读流
  .createReadStream('./sample.txt') // 创建一个可读流
  // 构建一个管道 process.stdout
  .pipe(process.stdout); // 输出设备的一种  交互 process单线程当前的,stdout输出设备