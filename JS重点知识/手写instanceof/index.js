// 类和实例
// constructor
function Animal(name) {
    this.name = name
}

// 原型对象
Animal.prototype = {
    constructor: Animal,
    canRun: function() {
        console.log('it can run')
    }
}

// 猫的子类
function Cat() {
    this.speak = '喵'
    Animal.call(this, 'cat')
}

// 完美的寄生组合式继承,子类的prototype中没有超类的属性,只继承(可以委托访问)了方法
function inherit(subType, superType) {
    var obj = Object.create(superType.prototype)
    subType.prototype = obj
    subType.prototype.constructor = subType
}
inherit(Cat, Animal)
// console.log(Cat.prototype.__proto__ === Animal.prototype) // true

// 实例
var dog = new Animal('小黄')
// console.log(dog instanceof Animal) // true
// console.log(Animal.prototype) // Animal { constructor: [Function: Animal], canRun: [Function: canRun] }
// console.log(dog.__proto__ === Animal.prototype) // true

var garfield = new Cat()
// 手动实现instanceof功能函数
function instance_of(L, R) {
    var O = R.prototype
    L = L.__proto__  // 重点代码
    while(true) {
        if (L === null) return false
        if (L === O) {
            return true
        }
        L = L.__proto__  // 重点代码
    }
}
console.log(instance_of(dog, Animal))
console.log(instance_of(garfield, Animal))
