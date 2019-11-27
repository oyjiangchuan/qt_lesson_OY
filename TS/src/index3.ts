// 类型断言(不要乱用)
// const preson = {} 
// preson.name = 'xiaomuzhu'  // 会报错
// preson.age = 20

// interface Person { 
//   name: string
//   age: number
// }

// const preson = {} as Person // 类型断言
// preson.name = 'xiaomuzhu' // 不会报错
// preson.age = 20


// 双重断言(不要乱用)
const preson = 'xiaomuzhu' as any as Person


// 类型守卫
// instanceof
// in
class Person {
  name = 'oy'
  age = 23
}

class Animals {
  name = 'petty'
  color = 'pink'
}

// function getSomething(arg: Person | Animals) {
//   if (arg instanceof Animals) {
//     console.log(arg.color)
//     console.log(arg.name)
//   }
//   if (arg instanceof Person) { // instanceof 类型守卫
//     console.log(arg.age)
//     console.log(arg.color) // 会报错
//   }
// }

// in
// function getSomething2(arg: Person | Animals) {
//   if ('age' in arg) {
//     console.log(arg.color) // 会报错
//     console.log(arg.age)
//   }
//   if ('color' in arg) { // in 类型守卫
//     console.log(arg.color)
//     console.log(arg.age) // 会报错
//   }
// }

// 字面量类型守卫
type Foo = {
  kind: 'foo' // 字面量
  foo: number
}
type Bar = {
  kind: 'bar'
  bar: number
}

// function doStuff(arg: Foo | Bar) {
//   if (arg.kind === 'foo') {
//     console.log(arg.foo)
//     console.log(arg.bar) // 会报错
//   } else {
//     console.log(arg.foo) // 会报错
//     console.log(arg.bar)
//   }
// }