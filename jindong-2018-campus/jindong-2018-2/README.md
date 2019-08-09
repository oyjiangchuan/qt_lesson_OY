## 
SEO: 浏览器会爬取html的内容, 为了SEO 我们要放文字, 为了美观 放图片
场景: 网站的logo

## css 选择器 优先级
!important
style(行内样式)1000
id(0100)
class(0010)
元素,伪元素(*)(0001)

#box span.active 0111
#box span 101
同等优先级 后出现的覆盖先出现的 后来者居上原则

## animation-fill-mode
forwards: 动画结束时,将动画留到最后一帧
none
backwrads: 动画开始前,将动画内元素的样式设为元素的第一帧(这里引用的是动画内的0%的样式,如果不使用这个属性就会把css内的样式作为第一帧,而不是百分之0时的动画)
both: forwards + backwrads

## transform: rotate(51deg) skew(20deg);
skew:(x,y)
skewX:() skew 保持两条边平行 x为正值  x不动 y逆时针倾斜
skewY:() skew 保持两条边平行 y为正值  y不动 x顺时针倾斜
相当于把矩形变成平行四边形或棱形