- 翻页图书demo使用到的一些知识点
- css 知识点
    vertical-align:baseline;   /* 是垂直方向上的对齐方式 */
    box-sizing: border-box;   /* 防止盒子因为padding值撑大的方法 */
    perspective: 1000px; /* 透视度 */
    从上到下的线性渐变 background: linear-gradient(red, blue); /* 标准的语法 */
    从左到右的线性渐变 background: linear-gradient(to right, red , blue); /* 标准的语法 */
    从左上角到右下角的线性渐变 background: linear-gradient(to bottom right, red , blue); /* 标准的语法 */
    transform: rotateX(60deg); /* 沿着X轴旋转60度 */
    user-select: none; /* 文本不能选中 */
    transform-origin: 0 50%; /* 旋转基点，前面是相对于X轴，后面是相对于Y轴 */
    transform-style: preserve-3d;/*	子元素将保留其 3D 位置。*/  flat  /* 子元素将不保留其 3D 位置 */
    background-size: cover;/* contain属性会完整显示图片，但是可能会给盒子留白，cover，则是满覆盖，可能会改变图片的形状 */

- javascript 知识点
    book = document.querySelectorAll('.book')[0] //选择.book下的html结构，存放在book[0]中；
    window.innerWidth  //当前窗口宽度
    onmousedown  //鼠标按下时执行的事件
    onmouseup  //放开鼠标执行的事件
    onresize  //在窗口被调整大小的时候执行的事件
    onmousemove  //鼠标移动的时候执行的事件

    //自执行函数，无需调用的函数
    (function (window,document)) {
        //函数功能代码
    })(window,document)

    book.style[prefixes[i] + 'Transform'] = `rotateX(${60 + angle/8}deg)`  //es6修改book的transform-rotateX属性的新写法