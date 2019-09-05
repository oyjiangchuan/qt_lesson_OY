const person = {
    isHuman: false,
    fn: function() {
        console.log(`My name is ${this.name}. Am I human ? ${this.isHuman}`)
    }
}
// const human = Object.create(person)
// console.log(human.__proto__)

// 简单的Object.create()方法实现
// 返回一个新对象, 返回的对象的原型对象是传入的参数对象
function create(obj) {
    function F() {}
    F.prototype = obj
    return new F();
}
console.log(create(person).__proto__ === person) // true