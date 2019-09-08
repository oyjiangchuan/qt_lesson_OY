// 简单类型的值的拷贝是拷贝值
let a = 1; // 值
let b = a;

b = 2;
console.log(a) // 1

// 复杂类型的值的拷贝是拷贝引用式赋值
let obj = {
    a: 1,
    b: function () {
        console.log('bbb')
    }
}
// 二线公司考题
// 深拷贝做法一,先把obj转化成一个字符串,再转换成对象
// 原理: 返回一个和obj相同的新的对象
// 数组有什么操作 返回新数组的 
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.a = 2;
// 浅拷贝(拷贝的对象是共享的)
console.log(obj.a) // 创业公司的考题
console.log(obj2) // { a: 2 } 说明函数这种对象类型不可以被字符串化

// Object.assign() 可以拷贝对象,但也是只能实现浅拷贝
// 基础版的深拷贝函数实现
function clone(target) {
    if (typeof target[key] === 'object') {
        let newSpace = {}
        for (var key in target) {
            newSpace[key] = clone(target[key])
        }
        return newSpace
    } else {
        return target
    }
}

