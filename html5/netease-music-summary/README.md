## position
position: static 默认
position: absolute;相对于父级第一个非 static 定位的元素

## linear-gradient
渐变角度, to bottm
渐变线 0deg 渐变线是从下往上，过中心点，当随着角度在增大，会沿着顺时针旋转，默认度数是180度

## 适配
transform: scale(.75); 
transform: scale(.5); 
transform: scale(.3);
transform-origin: top right; /* 改变压缩基点为右上角 */ 
压缩容器的宽高大小

animation: ani_qiuqian 6s ease-in-out infinite; 动画名 动画时间 动画的类型 如两头慢中间快 循环
添加完动画属性之后,一般要写动画的脚本如下:
@keyframes ani_qiuqian {
    0% {
        transform: rotate(0);
    }
    50% {
        transform: rotate(30deg);
    }
    100% {
        transform: rotate(0);
    }
}

transform-origin: -16% -29%;/* 改变旋转基点 旋转基点默认是中间点 */

//xxx.png
自己补全
http  http:
https https:

position 脱离文档流
动画就是 css 属性的改变
当一个 css 属性改变了 浏览器将其绘制在页面上  同时也会影响其他元素
让其他元素少受到该元素的影响

letter-spacing: 1px; /* 字间距 */
transition: opacity 1.2s,transform 1s; /* 过渡可以根据属性的变化调整属性变化所花的时间 */

animation: juanAnimation 5s steps(1) reverse,/* steps(1)不匀速,分一步,数字是多少就分几步完成,直接跳到下一个动画位置; reverse 表示倒着播放默认是从第一帧动画开始*/
    juanAnimation 5s steps(1) 6s forwards; /* 6s表示延时 forwards 表示停在最后一帧动画 默认是会回到最初位置的 */
    动画属性之间可以用逗号隔开,同时设置多个动画效果,还可以同名
    
transition-delay: 0.2s; 在过渡效果开始前等待 .2 秒,和animation中的delay属性相似,在动画效果开始前等待的时间长短

filter: blur(10px); 蒙层效果即模糊效果,一般配合动画的属性一起使用.
transition属性一般配合事件使用,当另一个事件发生时,改变transition属性中的值;一般和Js一起使用或则和鼠标悬停时发生事件
如:.para {
      opacity: 0;
      transform: translateY(8px);
      transition: opacity 2s, transform 2s;
    }
    .paras:hover .para {
      opacity: 1;
      transform: translateY(0);
    }
    在.para中定义transition属性
    在.paras:hover .para 中显示改变的值
    就会达到一种animation的效果