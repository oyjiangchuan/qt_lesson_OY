## 弹框类组件设计原则
1. html 结构
  和页面的主体内容同级 不能嵌套在页面的里面 插到body结束的位置处

## 面向对象 
  编程范式
  解决一类问题

  定义一个 vue 组件 <template> <script> <style>
  实际上它是一个构造函数
  在vue中可以使用vue.extend() 返回构造函数
  ## 第一种方法
  import Toast from ''
  <Toast />

  ## 第二种方法
  手动拿到了 Toast 构造函数
  vue.extend() 返回构造函数
  生成一个 Toast 的实例

