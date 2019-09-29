global.gc();
console.log(process.memoryUsage().heapUsed) // 3500176
let key = new Array(5 * 1024 * 1024) // 计数加一
let map = new Map()
map.set(key, 1); // 数组这里又被引用了 计算又加一 变为2

map.delete(key) // -1
key = null  // -1

// 尝试回收 看看能不能回收
// global.gc();
// console.log(process.memoryUsage().heapUsed) // 45496288 没有被回收

// 再次尝试 
global.gc();
console.log(process.memoryUsage().heapUsed) // 3555024  已经被回收了

