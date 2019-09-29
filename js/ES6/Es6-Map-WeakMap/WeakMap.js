global.gc();
console.log(process.memoryUsage().heapUsed) // 3500216
let key = new Array(5 * 1024 * 1024) // 计数加一
let wp = new WeakMap()
wp.set(key, 1) // 计数加一 = 2
key = null // -1
// 注意这里引用计数还是为一
global.gc();
console.log(process.memoryUsage().heapUsed) // 3553664 这里竟然已经被回收了 这里可以看出WeakMap的引用是弱引用 可能被回收 在Map中是一定要delete掉的计数重新变为一时才能手动回收成功