- vh viewhight 等比例的高度单位，100等份 解决了设备适配问题
- flex 布局 弹性布局 重要的布局方式；可以在弹性空间中放置，特别适合于移动世界
取消之后，为什么子元素，会变成竖的？
子元素都是div，块级元素 默认自己占一行
flex会改变这个.
- 盒子模型
了解元素在页面上的表现
盒子模型 = 内容区域（w/h）+ 内间距（padding）+边框（border）+外边距（margin）+position

来自wesbos 的javascript 30days ，第一篇敲击乐，让我感受到html5模拟现实的强大魅力和创造力。
- 1. 构建音乐键盘 
- 1.1 适配于所有设备的能力
    - 高度上 vh 相对单位 按比例来划分 100vh 是所有
    - 在不同大小的设备中，rem 可以无差别的来设置大小
    - 1rem = html font-size 10px绝对单位（一般设置页面中html字体默认大小为10px方法为font-size:62.5%;） px在pc时代是唯一
    - 相对单位 rem DOM树的树根 em  相对与=于自身的font-size 移动互联网时代/5G时代
    - .key  所有的大小设置都使用相对单位 宽度， 高度 （内容，圆角，边框）
    - 在不同的手机里面， 10px 大小不一样（电脑上面是相同的）
    - 请使用rem em vh vw 让页面适应所有设备
- 1.2 使用移动互联网时代的布局方式
	- 弹性布局 display：flex;
    - 改变内部元素的原来的块级能力 display：block | inline （只影响子元素显示，不影响孙元素）
    - 启动了display：flex 能力
    - 对齐方式justify-content（主轴方向，默认水平向左，可以变化）:center;
    - align-items：center;（纵轴方向）
- 1.3 盒子模型
    	- 盒子在页面上占的大小
- 2. js
	html+css+js
   	- js 是王者,  查找元素（html）, 设置属性 
   	- DOM API 
   	- document.getElementById(id)
   	- document.querySelectorAll(css selector)
   	- document.qyuerySelector(css selector)
   	- 监听事件 keydown 事件名称 window
   	- 找到相应的元素, audio#id DOMElement ,play()
- 3. 逻辑部分, 如何按不同的键播放不同的声音呢?
    - if/else switch/case
- 4. css 高级选择器
	- audio[data-key="65"] 我们一般会为标签加一些data-数据属性,
   	- 这个标签，它的数据是....
   	- id 性能， 查询的时是很快，但是要建索引 我们不使用，优化网页性能