// function identify() {
//     return this.name.toUpperCase()
// }
// var me = {
//     name: 'wn'
// }
// console.log(identify.call(me))
// function speak() {
//     var greeting = "Hello, I'am" + identify.call(this)
//     console.log(greeting)
// }

// var you = {
//     name: 'mg'
// }

// console.log(identify.call(you))

// console.log(speak.call(me))
// console.log(speak.call(you))

// function identify(context) {
//     return context.name.toUpperCase()
// }
// console.log(identify(me))

// // this提供一种更加优雅的方式来隐式'传递'一个对象
// function identify() {
//     return this.name.toUpperCase()
// }
// console.log(identify.call(me))


// function speak() {
//     var greeting = "Hello, I'am" + identify.call(context)
//     console.log(greeting)
// }
//--------------------------------------------------------------------------------------
// function foo(num) {
//     console.log("foo" + num)
//     this.count++ // 此时的this不是指向foo,this的指向取决于当前在哪里被调用(this词法作用域)
// }
// foo.count = 0;
// for (var i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i)
//     }
// }
// console.log(foo.count)
// -------------------------------------------------------------------------------------
// function foo() {
//     var a = 2;
//     // this.bar(); // 错误写法
//     bar();
// }
// function bar() {
//     console.log(this.a)
// }
// foo();
 // 不能使用this来引用一个词法作用域内部的东西

 // ------------------------------------------------------------------------------------

//  function baz() {
//      // 当前调用栈是baz
//      // 因此当前调用位置是全局作用域
//      console.log('baz');
//      bar();
//  }
//  function bar() {
//      // 当前调用栈是baz -> bar
//      // 因此当前调用位置是baz
//     console.log('bar');
//     foo();
// }
// function foo() {
//     console.log('foo');
// }
// baz()

// -------------------------------------------------------------------------------------

// function foo() {
//     "use strict" // 非严格模式下this可以默认绑定到全局对象上,严格模式下this默认绑定到undefined
//     console.log(this.a)
// }
// var a = 2;
// foo()

// -------------------------------------------------------------------------------------
// function foo() {
//     console.log(this.a)
// }
// var obj = {
//     a: 2,
//     foo: foo
// }
// var bar = obj.foo
// var a = 'www'
// obj.foo()
// bar()

function a() {
    c = 1;
}
a();
function m() {
    console.log(c)
}
m();


