let obj = {
    a: 1,
    fn: function() {
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
    let cloneTarget = {}; // 浅拷贝要的内存空间
    for (const key in target) {
        cloneTarget[key] = target[key];
    }
    return cloneTarget;
}
let obj1 = clone(obj)
obj1.a = 2
obj1.filed4.child = 'newChild'
console.log(obj1) // { a: 2, fn: [Function: fn] }
console.log(obj.filed4.child) // newChild 又被影响了
