## fullpage 实现
- css 处理
  - 某个盒子里的所有子元素占据一页
  - 事件 onscroll 很多次, 使用节流减少次数
  - transform transition 
  - 面向对象
- DOMContentLoaded事件
  当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载
- load事件
  当一个资源及其依赖资源已完成加载时，将触发load事件

- jquery ApI 
  $(fn) 原生js也是有生命周期的(vue)  我们叫它叫事件
  JS是基于事件的脚本语言  找对的生命周期
  $('.container') 极大简化了querySelector() 方法
  实现typeof  参数  function 走分支
  .show() 如果被选元素已被隐藏，则显示这些元素,适用于display:none
  .find() 查找querySelector
  .css(cssname, val) .height()

  VUE  统统没有这些
  VUE  MVVM  尽量减少DOM编程  querySelector ... css DOM的查找 执行 都是要花很多内存的 VUE可以优化它

  VUE  生命周期  对应  JS的一些事件
  .innerHTML  css  width
  <template>
    <div :width="width">
      {{content}}
    </div>
  </template>
  可以减少DOM操作