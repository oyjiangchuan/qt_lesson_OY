function greeter(person: string): Function { // ts参数 需要指明类型 不然会报错
  // return 'hello, ' + person
  return function greeter(person: string) {}  // 返回值也需要类型
}

const user = 'wn'

greeter(user)

// string number boolean null undefind symbol void bigint (TS的八种基础类型)

const isLoading: boolean = false

const a: number = 6
const b: number = 0xf00d /* (十进制 二进制 十六进制 都可以用number 类型表示) */

const book: string = 'ts'

function warnUser(): void {
  alert('test')
}

const c: void = undefined /* undefined 可以被当成void空 */
const d: undefined = undefined

const e: null = null
// const f: void = null
// const sym1 = symbol('key1')
// const sym2 = symbol('key2')
// sym1 === sym2 false


// const max = Number.MAX_SAFE_INTEGER === 2的53次方 - 1 (js中)
// JS 中能精准表示的最大整数是 Math.pow(2, 53)

// const max1 = bigint(Number.MAX_SAFE_INTEGER)
// const max2 = max1 + 1
// const max3 = max1 + 2

// declare let foo: number
// declare let bar: bigint
// foo === bar // false

// any 类型
// unknow
// nerver
// object

// let notSure: number = 4
// notSure = '4' 会报错

let notSure1: any = 4
notSure1 = '4' // 不会报错
notSure1.foo.bar = 1  // 可以成功

// let value: unknown = 4
// value = '4' // 也不会报错 unknown 和 any 作用相识 但是unknown更加严格
// value = {}
// value = [] // 可以被任意赋值
// 这些操作在any中都可以
// value.foo.bar = 1 // 不可以深层赋值
// value() // 不可以函数调用
// new value() // 不可以new
// value[0][1] // 不可以深层赋值


function error(message: string): never {
  throw new Error(message)
}

// never表示值永远不存在的类型

const empty: never[] = [] // 该数组永远为空 不能添加 push

// 泛型
const list: Array<number> = [1, 2, 3]  // 定义数组的第一种泛型写法
const list1: Array<string> = ['1', '2', '3']
const list2: number[] = [4, 5, 6] // // 定义数组的第二种泛型写法

// 元组
let x: [string, number]
x = ['hello', 10]
// x = ['hello', 10, false]
// x = ['hello']

// object enum枚举
// enum Direction {
//   Center = 1
// }
// let val: object

// val = Direction
// val = [1]
// val = [1, 'hello']
// val = {}

// 枚举
enum Direction {
  up,
  down = 5,
  left,
  right
}

console.log(Direction.up === 0) // true 默认放置下标 随上一个值加一 比如第一个11 第二个没放置值就默认为12
console.log(Direction.down)

// 接口 interface
interface User { // 定义一个User接口 
  name: string,
  age?: number, // 当前age属性可能没有
  readonly isMale: boolean // 只读属性 不可以被修改
  say: (words: string) => string
}
const getUserName = (user: User) => user.name  // 用接口User 描述一下参数user的类型
// user.say = function(words: string) {}


// 属性检查
interface Config {
  width?: number,
  [propName: string]: any // 2. 添加字符串索引签名
}

function CalculateAreas(config: Config): {area: number} { // 函数返回area 类型为number的写法
  let square = 100
  if (config.width) {
    square = config.width * config.width
  }
  return { area: square }
}

// let mySquare = CalculateAreas({widdth: 400})

// 类型断言(1. 解决传进来的参数 是接口中没有定义的名字 接口不期望的值)
// let mySquare = CalculateAreas({widdth: 400} as Config)

// 3. 将对象字面量赋值给另一个变量
let options = {widdth: 400}
let mySquare = CalculateAreas(options)


// 抽象类 class
abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('ao ao ao ao')
  }
}

// const animal = new Animal() // 会报错 无法创建抽象类的实例

// 实例化抽象类 需要创建子类来继承基类 然后就可以实例化子类
class Cat extends Animal { // 非抽象类“Cat”不会实现继承自“Animal”类的抽象成员“makeSound”
  makeSound() {
    console.log('miao miao miao')
  }
}

const cat = new Cat()
cat.makeSound() // Cat自己定义的
cat.move() // ao ao ao ao

// public
// private
// 
class Car {
  public run() { // 被public修饰的成员 是可以被外部访问的
    console.log('public method')
  }
  private name() { // 被private修饰的成员 只能在类“Car”中访问
    console.log('private method')
  }
  protected run1() { // 被protected修饰的成员 只可以被内部和子类继承使用 不可以被实例使用
    console.log('')
  }
}
const car = new Car()
car.run()
// car.name() // 会报错 属性“name”为私有属性，只能在类“Car”中访问

class GTR extends Car {
  init () {
    this.run1() // 这里可以调用被protected修饰的父类方法
  }
}
