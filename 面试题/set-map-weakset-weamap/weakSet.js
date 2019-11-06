// weakSet 对象 允许你将弱引用对象存储在一个集合中 可能被垃圾回收机制回收  --- 弱引用版本的Set
var test = {
  name: 'test',
  content: {
    name: 'oy',
    age: 20
  }
}
var ws = new WeakSet()
// var a = { foo: 'bar' }
// ws.add(a)
// console.log(ws) // WeakSet { [items unknown] } 如果是Set 会打印 Set { { foo: 'bar' } }

ws.add(test.content)
console.log(ws)
ws.delete(test.content)
console.log(ws)

// WeakSet 的作用
const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if(!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用')
    }
  }
}