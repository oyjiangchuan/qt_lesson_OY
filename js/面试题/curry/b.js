// curry 函数, 返回一个新函数, 逐渐的消化
function curry(fn, len = fn.length) {
    return _curry.call(this, fn, len)
}

function _curry(fn, len, ...args) {
    // typeof function
    return function (...params) {
        console.log(params)
        // 自己调用自己 递归
        // 如果没到数量 返回函数 到了就执行代码
        console.log(...args, '--------')
        console.log(...params, '++++++++')
        // console.log(len, '////////')
        let _args = [...args, ...params]
        if (_args.length >= len) {
            return fn.apply(this, _args)
        } else {
            return _curry.call(this, fn, len, ..._args)
        }
    }
}

let _fn = curry(function (a, b, c, d, e) { // _fn是_curry函数中返回的匿名函数
    console.log(a, b, c, d, e)
})

// _fn(1)(2)(3)(4)(5)
_fn(1)(2)(3)
// _fn(1)

// commonjs 模块化机制 curry能力
module.exports = curry