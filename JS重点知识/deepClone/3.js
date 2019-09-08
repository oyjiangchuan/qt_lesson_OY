let obj = {
    a: 1,
    fn: function () {
        console.log(this.a)
    },
    filed4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
}
function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = {}; // 浅拷贝要的内存空间
        // 性能开销
        for (const key in target) {
            cloneTarget[key] = clone(target[key]); // 递归调用, 如果对象里面还有对象也要进行深拷贝
        }
        return cloneTarget;
    } else {
        return target
    }
}
let obj1 = clone(obj)
obj1.a = 2
obj1.filed4.child = 'newChild'
console.log(obj1) // { a: 2, fn: [Function: fn] }
console.log(obj) // newChild 不被影响了