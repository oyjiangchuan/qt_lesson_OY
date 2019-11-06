// set 对象
const s = new Set();
// NAN 在set 中判断为相等; 5和'5'判断为不等;
[1, 2, 3, 4, 5, 3, 2, 1].forEach(x => s.add(x)) // set 的add方法
console.log(s)

console.log(s.length) // undefined 没有length属性
console.log(s.size) // 5 有size属性

s.add(6).add(7).add(8) // 可以链式调用

s.has(1) // set 的has方法
s.delete(1) // set 的delete方法

Array.from() // 可以将类数组的数据结构转换成数组 同样可以转换set数据结构


// set的遍历方法 
// set的遍历顺序是根据set的插入顺序来定的
// 1. keys() 包含集合中所有的键的迭代器
// 2. values() 包含集合中所有的值的迭代器
// 3. entries() 包含set对象中所有键值的迭代器
// forEach(callback, thisArg)

let set = new Set([1, 2, 3])
console.log(set.keys()) // 1, 2, 3 键值都是1 2 3
console.log(set.values()) // 1, 2, 3 键值都是1 2 3
console.log(set.entries()) //{[1, 1],[2, 2],[3, 3]}
// 支持forEach
set.forEach((key, values) => { // forEach遍历set数据结构时参数会和其他数组的遍历不同
  console.log(key + ':' + values) // 1 : 1 ; 2 : 2 ; 3 : 3 ;
})
// 支持map 修改原数组
set = new Set([...set].map(item => item * 2))
console.log(...set)
// 支持filter 返回新数组
set = new Set([...set].filter(item => item >= 4))
console.log(...set)