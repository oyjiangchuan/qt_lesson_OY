console.log(process.memoryUsage())
/* { rss: 19931136,
  heapTotal: 6537216,
  heapUsed: 4012896,  堆内存
  external: 8272 } */

// 引用计数 new Array(5 * 1024)开始是0
let array = new Array(5 * 1024); // 这里被array引用了 计数加一

// 打印出内存的使用情况
console.log(process.memoryUsage())
/* { rss: 20537344,
  heapTotal: 7061504,
  heapUsed: 4583248,
  external: 8680 } */

array = null // 这里被array不在引用了 计数减一 会自动回收

global.gc(); // 手动回收 node --expose-gc  bigArray.js 启动 这里需要在前面添加一个--expose-gc参数
console.log(process.memoryUsage())

/* { rss: 21168128,
  heapTotal: 10731520,
  heapUsed: 3948648,  降下来了
  external: 8680 } */

/* { rss: 21118976,
  heapTotal: 10731520,
  heapUsed: 3907976, 再一次降低
  external: 8680 } */
