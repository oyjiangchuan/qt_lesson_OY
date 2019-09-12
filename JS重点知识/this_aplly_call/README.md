## js 
  - [this aplly call](js/this/apply/call)
  this 指向以及指定(call/aplly)
  - this 并不是由定义函数时决定的 由最后的运行方式决定的
   - 函数是普通的函数, 运行方式(在全局作用域中被调用) this指向window
   - 函数作为对象方法被运行时 this指向对象本身如 a.fn()

  - 手动的指定this apply() call() 方法强制指定this指向
   - function 是一等对象 js 灵活的this指向在规则之外提供了apply() call()方法 手动绑定函数的
   - call() apply() 区别 传递参数的区别 call() 列举传递 apply() 数组形式传递

  - 其他方案
   - es5 var that = this
   - es6 箭头函数
    1. 箭头函数的 this 始终指向函数定义时的 this，而非执行时。箭头函数需要记着这句话：“箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，   箭头函数种的this取决包裹箭头函数的第一个(普通函数)的this，普通函数又取决于最后调用;否则,this 为 undefined”。
   - new 实例化一个对象
   