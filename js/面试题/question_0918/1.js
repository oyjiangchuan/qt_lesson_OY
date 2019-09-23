// 第一题Object.freeze()
const box = {a: 10, b: { c: 100}};
const arr = [1, 2, 3]
Object.freeze(box) // 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。
box.a = 100 // 不会被修改
box.b.c = 1000 // 会被修改为1000(只能冻结第一层的)
// 可变是万恶之源
// const box1 = box
// box1.a = 100
// box ?
Object.freeze(arr)
arr[0] = 123
console.log(box)
console.log(arr)


// 第二题解构
const { name: myName } = { name: 'lihua'} 
// console.log(name) // name is not defined 已经被重命名了
console.log(myName)

// 第三题闭包 返回函数的函数(高阶函数)
const add = () => {
  const cache = {}
  return num => {
    if (num in cache) {
      return `from cache ${num}`
    } else {
      const r = num + 10
      cache[num] = r
      return `calcul ${r}`
    }
  }
}
// addFunc 是一个函数
const addFunc = add()
console.log(addFunc(10)) // calcul 20
console.log(addFunc(10)) // from cache 10
console.log(addFunc(2 * 5)) // from cache 10

// 第四题 for in 和 for of 的区别
const arr4 = ['lihua', 'lilei'];
// 枚举一个对象里的属性 
// 在数组上使用for in 时会把数组转化为 {'0': 'lihua', '1': 'lilei'}
for (let item in arr4) {
  console.log(item) // 0 1 
  // console.log(arr4[item])
}
// for of 可以遍历的 数组 Map Set String (可迭代对象)
// for of 可以用来遍历可迭代对象
// 可迭代对象？
for (let item1 of arr4) {
  console.log(item1) // lihua lilei
}

// 第五题 this的简单指向

// 小黄书this第一节
// function foo() {
//   console.log(this) window
// }

// 小黄书this第二节
// this 在调用的时候才被确定
var status = 'global'
var obj = {
  name: 'lala',
  status: 'obj',
  getStatus: function() {
    return this.status
  }
}
console.log(obj.getStatus()) // obj
var fun = obj.getStatus
console.log(fun()) // global

// 小黄书this第三节
// call apply bind
// bind会返回一个绑定了this的函数(是拷贝一份前面调用的函数,和前面的方法一样,但是内部的this已经绑定了) 但不会立即执行
function bar() {
  console.log(this.name)
}
var char = bar.bind(obj)

// 小黄书this第四节 new
function Test() {
  this.name = 'name';
  // this 指向 实例 往实例上添加 name 属性
}
var test = new Test()
// Test 里面的 this 指向 test(实例)

// 这四个规则有优先级 new > bind > obj.getStatus() > getStatus()

var bindObj = {
  name: '123'
}
function TestNew() {
  this.age = 20
}
const BindTestNew = TestNew.bind(bindObj)
// new 的优先级高过了bind
BindTestNew()
let res =new BindTestNew()
console.log(res)
console.log(bindObj)

// 第六题 ES6中的class
 class Foo { // 只是一个 语法糖 背后还是ES5

 }
 console.log(typeof Foo) // function

 // 第七题
 // Symbol ES6 新增的数据类型
 // string number boolean null undefind Symbol Object(Array, function, object)
 let a = Symbol('a');
 let b = Symbol('a');
 console.log(a === b) // false
 // 使用场景 给对象添加属性 不会覆盖之前的属性
 var obj7 = {
   [a]: 'a value',
   b: 'b value',
   b: 123
 }
 console.log(Object.keys(obj7)) // 返回一个对象上面可枚举的属性 Enumerable属性
 console.log(Object.getOwnPropertySymbols(obj7)) // 获取某个对象上的所有Symbol属性