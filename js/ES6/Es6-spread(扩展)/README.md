## es6 函数的扩展
1. rest 参数 把参数整理为一个数组function(a, b, c, d, ...) => function(...args) args = [a, b, c, d, ...]
es5中
Array.from(arguments)
2. 为函数的参数赋默认值
    Es6中赋默认值方法
   function Bar(name = 'default name') { // es6赋默认值的方式
        this.name = name
    }
    Es5中赋默认值
    this.name = name || 'default name'; es5赋默认值的方式
