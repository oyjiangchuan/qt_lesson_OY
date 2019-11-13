function add(a, b, c) {
  return a + b + c
}

add(1, 2)

// 柯里化函数 最简版

// function curry(fn) {
//   var args = [].slice.call(arguments, 1) // [arguments]
//   return function() {
//     var newArgs = args.concat([].slice.call(arguments))
//     console.log(newArgs)
//     return fn.apply(this, newArgs)
//   }
// }

// var addCurry = curry(add, 1)

// console.log(addCurry(2))


// 柯里化函数 第二版

/* function sub_curry(fn) {
  var args = [].slice.call(arguments, 1)
  return function() {
    fn.apply(this, args.concat([].slice.call(arguments)))
  }
}

function curry(fn, length) {
  console.log('1111111',length)
  console.log('-------',fn.length)
  length = length || fn.length
  console.log('2222222',length)

  var slice = Array.prototype.slice
  return function() {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments))
      return curry(sub_curry.apply(this, combined), length - arguments.length) // 递归
    } else {
      return fn.apply(this, arguments)
    }
  }
}

var addCurry = curry(add)
console.log(addCurry(1, 2)(3)) */

// 柯里化函数 第二版(极简版)
function sub_curry(fn) {
  return function () {
    return fn()
  }
}

function curry(fn, length) {
  length = length || 4;
  return function () {
    if (length > 1) {
      return curry(sub_curry(fn), --length)
    }
    else {
      return fn()
    }
  }
}

var fn = curry(function (a, b, c, d) {
  console.log([a, b, c, d]);
});

console.log(fn('a')('b')('c')('d'))