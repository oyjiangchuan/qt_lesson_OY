/* 基本类型的赋值是深拷贝 */
// let a = 'wn'
// let b = a
// console.log(b)

// a = '蜗牛'
// console.log(a)
// console.log(b)

/* 引用类型的赋值是浅拷贝 */
// let a = {
//   name: 'wn',
//   book: {
//     title: 'You do not konw JS',
//     price: '45'
//   }
// }

// let b = a
// console.log(b)

// b.name = 'OY'
// b.book.price = '55'
// console.log(a)

// let b = Object.assign({}, a) // Object.assign() 不是深拷贝也不是浅拷贝 对象中的基础数据类型拷贝是深拷贝 但是对象中的引用类型拷贝是浅拷贝
// console.log(b)

// b.name = 'OY'
// b.book.price = 55

// console.log(a)

// let b = {...a} 对象的解构 和 Object.assign() 的情况是一样的

/* 数组的情况 */

let a = [0, '1', [2, 3]]
let b = a.slice(1) // slice也是和 Object.assign();对象的解构;的方法 一样的情况

b[1] = '22'
b[2][0] = 4


