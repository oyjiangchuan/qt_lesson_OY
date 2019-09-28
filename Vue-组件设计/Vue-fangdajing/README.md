- 绑定三个关键的事件 鼠标进来时 鼠标移动时 鼠标离开时 
    @mouseover="mouseOver" 鼠标进来时
    @mousemove="mouseMove" 鼠标移动时
    @mouseout="mouseOut"   鼠标离开时
- 这三个事件的默认参数event
  这里的event.clientX event.clientY 都是相对于浏览器可视区域的位置 是绝对的 不会受任何盒子的影响

- 标签内动态绑定图片的src地址
  :src="smallSrc"

- Vue中写行内样式的语法
  <div :style="{width: '210px',height: '210px',opacity: 0.7}"></div> 

- Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置

  返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合, 即：是与该元素相关的CSS 边框集合 。
  
  DOMRect 对象包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。

  DOMRect{bottom: 937 height: 100 left: 863 right: 963 top: 837 width: 100 x: 863 y: 837}
  ## 这里的属性需要特别注意 bottom right 这两个属性值是 该容器右下角的点相对于视口左上角的位置大小 和定位中的值是不同的 X Y 值其实就是容器左上角顶点的坐标了 这里的值都是很有用的

  当计算边界矩形时，会考虑视口区域（或其他可滚动元素）内的滚动操作，也就是说，当滚动位置发生了改变，top和left属性值就会随之立即发生变化（因此，它们的值是相对于视口的，而不是绝对的）。如果你需要获得相对于整个网页左上角定位的属性值，那么只要给top、left属性值加上当前的滚动位置（通过window.scrollX和window.scrollY），这样就可以获取与当前的滚动位置无关的值。

  为了跨浏览器兼容，请使用 window.pageXOffset 和 window.pageYOffset 代替 window.scrollX 和 window.scrollY。