## Map 和 WeakMap 的区别

1. WeakMap key 只接受对象
2. WeakMap key 所引用的对象 是弱引用 

- 弱引用：不确保引用的对象不会被垃圾回收器回收掉(当此时的计数只剩下WeakMap中引用时) 可能在某一个时间该对象会被回收掉 无法引用

- 垃圾回收机制
  1. 引用计数

- 手动回收
  global.gc(); // 手动回收 node --expose-gc  bigArray.js 启动 这里需要在前面添加一个--expose-gc参数

- 打印内存的使用情况
  // 打印出内存的使用情况
  console.log(process.memoryUsage())