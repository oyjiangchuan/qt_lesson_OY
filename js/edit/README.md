- 如果我们有好多信息要从用户收集
  表单不要太长  易用
  移动 分页 (不要把所有信息放在一个表单)
  PC端  分成多个表单  使用document.froms[]定位

- JS 在面向对象中
  this 指向谁？
  EditInplace  类 抽象概念 
  let editor = new EditInplace()
  this 指向的是  editor
  this.staticElement = document.createElement('span')
  this.converToText(); // 既是函数 又是对象的方法  在函数内部的this 指向上一级对象

  this.staticElement.addEventListener('click', function() {
        console.log(this)
        // 引用到对象怎么办？
        this.convertTOEdit();
        这里的this指向this.staticElement // 语法定义
        作为事件来执行  内部的this 指向事件发生的元素
        }, false)
    }

  函数内部的this是执行的动态决定的, 执行的方式来决定的
  this.converToText(); // 函数是作为对象的方法被调用 this指向对象

- EditInplace  类, constructor + prototype(原型对象)
  new EditInplace() 对象  new 发生了什么
  function EditInplace() { } // 函数首字母大写 构造器
  EditInplace.prototype = {
      convertTOEdit: function() {},
      ......
  }

- this 用法
- 代码的组织 attchEvent
- 有不同状态时,给每个状态添加一个方法
- 原生JS