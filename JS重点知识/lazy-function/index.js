// let t;
// function foo() { // 1. 产生全局污染 2. 每次执行函数都要进行判断
//   if (t) return t;
//   t = new Date()
//   return t
// }

// 闭包写法 解决全局污染
// var foo = (function () {
//   var t;
//   return function () {
//     if (t) return t;
//     t = new Date()
//     return t
//   }
// })()

// 利用函数也是对象的特性的写法 解决全局污染
// function foo() {
//   if (foo.t) return foo.t 
//   foo.t = new Date()
//   return foo.t
// }

// 惰性函数写法  减少函数中多次判断的问题
// var foo = function() {
//   var t = new Date()
//   foo = function() {
//     return t
//   }
//   return foo
// }


function addEvent(type, el, fn) {
  if (window.addEventListener) {
    el.addEventListener(type, fn, false)
  } else if (window.attachEvent) { // window.attachEvent IE浏览器的事件监听
    el.attachEvent('on' + type, fn)
  }
}

// 惰性函数 写法 只判断一次 在函数内部重写函数
function addEvent(type, el, fn) {
  if (window.addEventListener) {
    addEvent = function (type, el, fn) {
      el.addEventListener(type, fn, false)
    }
  } else if (window.attachEvent) {
    addEvent = function (type, el, fn) {
      el.attachEvent('on' + type, fn)
    }
  }
}