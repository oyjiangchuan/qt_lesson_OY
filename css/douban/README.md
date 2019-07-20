- html5 语义化
- 良好的html结构
- 取名
- 复用

- 路径 ../(上一级) ./是相对路径,相对于当前 /是绝对路径(web server)
- 前端词汇量
    page(页面) header(头部) content(内容) footer(底部)
    有新增的html5标签
    <header></header>
    <main></main>
    <footer></footer>
    分别存放头部，中间内容，底部
- 经典结构 H5语义化标签
    header+content+footer(垂直方向)
- 弹性布局改变主轴为纵轴(flex-direction:column)+flex:1(给弹性盒子的中间子孩子设置，其他孩子不设置，可以留出中间剩余宽度)
- 优化代码结构，不要重复代码
- 到底以哪个为设计稿 psd 750px, 375px retina(屏幕)
    750 400 200/375*414 200/375*100%
    在移动开发中，使用em，和rem等相对单位，以及容器使用宽高%的方法，方便与适配各种屏幕；
- max-width(设置最大的宽度) + margin:0,auto; 给我们带来移动设备到ipad，pc端的扩展 碎片化的终端
- 移动端水平方向上要禁用滚动条 overflow-x: hidden;
    垂直方向上
    overflow-scrolling: touch; 滑动更顺滑(重要考点)
    -webkit 浏览器前缀 -ms -moz
    手机端都是webkit内核 safari android chrome
- input
    手机交互 font-size: 35px+;(重要)
    border: 0;
    输入不要顶格 text-indent
    search 居中
    图标用背景做的 url() base64格式，no-repeat 15px
    background-size 

- 一些重要的css3属性
    -webkit-overflow-scrolling: touch;/* 在垂直方向上滑动更加顺畅 */
    -webkit-tap-highlight-color: transparent;/* 取消ios系统上出现的高亮效果，调整为透明 */
