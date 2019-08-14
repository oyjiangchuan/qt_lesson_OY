// es5 面向对象
function Person(name) { // 女主角
    // constructor
    // Object
    this.name = name;
}
// 男主角


Person.prototype = {
    constructor: Person,
    getName: function() {
        return this.name
    }
}

// Object.defineProperty(Person.prototype, "constructor", {
//     value: Person,
//     enumerable: false
// }) 

// Object.defineProperty(Person.prototype, "constructor", { 
//     enumerable: false, 
//     value: Person 
//     });

// Person.prototype.getName = function() {
//         return this.name
// }

// new + fun()  新的对象
// 实例 第三者
let person = new Person("哈哈");

for(let a in Person.prototype) {
    console.log(a)
}
console.log(person.name)
console.log(person.constructor)
console.log(person.__proto__.constructor)
console.log(Person.prototype.constructor)
