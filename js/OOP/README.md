## 创建对象的几种方法
1. 对象字面量量
  var obj = {
      name: "",
      ......
  }
2. new Object()
3. 构造函数
  通过 new 调用的时候, 
  如果构造函数没有返回值, 或者返回的不是一个对象：
  那么会隐式创建一个对象,把属性放到该对象上面去,
  最后返回该对象
  如果构造函数有返回值,且返回的是一个对象 就会返回该构造函数中的对象,而不是创建出来的对象
  var t = new Object();
  t.x = x;
  ......
  return typeof Constructor() === 'object' ? Constructor() : t;

##
每个函数被创建的时候, 都被赋予一个 prototype 属性
