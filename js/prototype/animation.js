function Animal(planet) {
    this.planet = planet
}
// construtor 函数是JS的一等对象
// Animal实例的原型对象 return {plante:}
Animal.prototype.getPlanet = function() {
    return this.planet;
}

function Person(name) {
    this.name = name;
}
// 人类也在地球
// 原型链 animal => Animal.prototype => Object
Person.prototype = new Animal('earth');

Person.prototype.getName = function() {
    return this.name
}

const person = new Person('哈哈哈')
console.log(person.getName())
console.log(person.getPlanet())
console.log(Person.prototype.__proto__ === Animal.prototype)