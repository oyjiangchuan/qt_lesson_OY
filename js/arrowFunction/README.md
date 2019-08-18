## 箭头函数
1. 箭头函数 不支持重名形参,普通函数可以
2. 箭头函数 没有 this 箭头函数 this 指向定义时候所处的上下文(外部函数)的this 
   call apply 不能改变箭头函数的 this



## 类数组
1. length属性
2. 可以通过索引获取值
如:arguments 
将类数组转换成正真的数组
1. es6新增的静态方法 Array.from()
2. Array.prototype.slice.call()

## this
调用的时候 才确定下来