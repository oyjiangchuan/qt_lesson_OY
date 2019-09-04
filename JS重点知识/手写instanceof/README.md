- instanceof
- 手写一个instance_of函数
- 原型的三者关系
  类(构造函数+原型对象) 实例对象
  Constructor.prototype = 原型对象
  原型对象.constructor = 构造函数(Constructor)
  实例对象.__proto__ = 原型对象
  instanceof 原型对象的两种表示 或者沿着原型对象的不停查找