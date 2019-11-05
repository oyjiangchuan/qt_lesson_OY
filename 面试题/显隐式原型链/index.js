function Person(name) {
  this.name = name
}
// 这种写法相当于 new Function() -> Person.__proto__ === Function.prototype -> Function.prototype.__proto__ === Object.prototype
let p = new Person('wn')
// p.__proto__ 隐式原型链
// Person.prototype 显式原型链
console.log(p.__proto__ === Person.prototype) // true

// 3. 构造函数有 return 情况

function Person(name) {
  this.name = name
  return // 这里如果是对象 会直接返回该对象
}
let p = new Person('wn')
console.log(p)

// 2. for in 和 for of

var myArr = [1, 2, 3, 4, 5, 6, 7]
myArr.name = 'wn'
for (let index of myArr) {
  console.log(index) // 1 2 3 4 5 6 7
}
for (let index in myArr) {
  console.log(index) // 0 1 2 3 4 5 6 name
}

// for in 遍历数组出现的情况
// 1. index是索引为字符串型的数字 不能进行几何运算
// 2. 遍历的顺序有可能不是按照实际数组的内部顺序进行
// 3. 使用 for in 会遍历数组所有的可枚举属性 包括原型链上的

// for of 
// 遍历的是数组的元素
// 不包括数组原型和索引

// 3. 数据降维 多维数组降级成一维数组 1.递归
 let gArr = [1, [2, 3], 4, 5, [6, 7, [3, 2, 8]]]
 let oArr = [1, 2, 3, 4, 5, 6, 7, 3, 2, 8]
 function changeArr(arr) {
   let res = []
   arr.forEach(item => {
     if (Array.isArray(item)) {
      res = res.concat(changeArr(item))
     } else {
      res.push(item)
     }
   });
   return res
 }
 console.log(changeArr(gArr))

//  return arr.reduce((pre, item) => {
//    return pre.concat(Array.isArray(item) ? changeArr(item) : item)
//  }, [])


