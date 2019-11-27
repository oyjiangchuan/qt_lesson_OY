// 函数类型

// const add: (a: number, b: number) => 
// number = (a: number, b: number) => a + b


// const add = (a: number, b?: number) => a + (b ? b : 0) 参数可能不存在的情况

// const add = (a: number, b = 10) => a + b 参数给默认值的情况

// const add = (a: number, ...rest: number[]) => rest.reduce((a, b) => a + b) // ...rest代表剩余参数




// 函数的重载
// interface Directions {
//   top: number
//   right: number
//   bottom: number
//   left: number
// }

// function assigned(all: number): Directions
// function assigned(topAndBottom: number, leftAndRight: number): Directions
// function assigned(top: number, right: number, left: number, bottom: number): Directions

// // 代码实现函数不可被调用
// function assigned (a: number, b?: number, c?: number, d?: number) {
//   if (b === undefined && c === undefined && d === undefined) {
//     b = c = d = a
//   } else if (c === undefined && d === undefined) {
//     c = a
//     d = b
//   }
//   return {
//     top: a,
//     right: b,
//     bottom: c,
//     left: d
//   }
// }

// assigned(1)
// assigned(1, 2)
// assigned(1, 2, 3)
// assigned(1, 2, 3, 4)


// 泛型定义函数体 提高函数的复用性

// function returnItem (para: number): number {
//   return para
// }

// function returnItem (para: string): string {
//   return para
// }

function returnItem<T>(para: T): T { // 泛型变量  定义泛型函数体
  return para
}


function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

// 泛型变量
function getArrayLength<T>(arg: Array<T>): Array<T> {
  console.log((arg as Array<any>).length)
  return arg
}

// 泛型接口
interface ReturnItemFn<T>{
  (para: T): T
}

const returnItemFn: ReturnItemFn<number> = para => para // 定义泛型接口函数类型

// 泛型类
// class Stack<T> {
//   private arr: T[] = []

//   public push(item: T) {
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }

// 泛型约束(有时候需要约束一下)
// type Params = number | string // type 用来定义类型
// class Stack<T extends Params> {
//   private arr: T[] = []

//   public push(item: T) {
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }

// const stack1 = new Stack<string>()
// // const stack2 = new Stack<boolean>() // 会报错

// 使用多重类型进行泛型约束
interface FirstInterface {
  doSomething(): number
}
interface SecondInterface {
  doSomethingElse(): string
}

// class Demo<T extends FirstInterface,T extends SecondInterface> {  // 错误示范
//   private test: T

//   useT() {
//     this.test.doSomething()
//     this.test.doSomethingElse()
//   }
// }

// 超级接口解决

interface ChildInterface extends FirstInterface, SecondInterface {
}

// class Demo<T extends ChildInterface> {
//   private test: T

// useT() {
//     this.test.doSomething()
//     this.test.doSomethingElse()
//   }
// }

// new 
function factory<T>(type: {new(): T}): T { // 泛型变量T为构造函数的写法
  return new type()
}
