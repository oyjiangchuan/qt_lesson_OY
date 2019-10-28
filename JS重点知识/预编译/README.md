## 预编译 四部曲 发生在函数执行之前
1. 创建AO对象
2. 找形参和变量声明 将变量声明和形参 作为AO属性名 值为 undefined
3. 将实参值和形参值统一
4. 在函数体找到函数声明，将函数声明作为AO对象属性名 值赋予函数体

AO {

}

AO {
  a: undefined,
  <!-- a: undefined, 覆盖 -->
  b: undefined
}

AO {
  a: 1,
  b: undefined
}

AO {
  a: function a() {},
  b: undefined,
  d: function () {}
}

执行后
AO {
  a: 123,
  b: function () {},
  d: function () {}
}


## 预编译也发生在全局 
1. 创建GO对象
2. 找变量声明 将变量声明 作为GO属性名 值为 undefined
3. 在函数体找到函数声明，将函数声明作为GO对象属性名 值赋予函数体

代码执行的时候先从AO中找 找不到就 再到GO中找