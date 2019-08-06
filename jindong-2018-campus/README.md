## em
如果 自己设置了 font-size 相对于自己的font-size 如果没有相对于父级
浏览器最小能识别的字体时12px

## border-image
border-image-source: url() linear-gradient() ;
border-image-slice: (裁剪) 2 2 2 2

## animation
animation-direction: alternate(正着执行一次,返回时慢慢缩回)
alternate-reverse(反着执行一次,正着执行一次)
normal(正常执行,返回时直接回到起点)

## transform
transform: rotateX(-33.5deg) rotateY(45deg);
绕x轴旋转,当rotateX为负数时是逆时针,当rotateZ为负数时也是逆时针,反之为顺时针
但是这里有个特例rotateY为正数时就是逆时针,为负数时反而是顺时针

还有一点值得强调,每根轴的方向是不一定,这是什么意思呢？创建完3d空间之后,每个元素都是在一个面上,XYZ都是符合标准的空间坐标轴;当某一个元素围绕某根轴旋转之后,对应的另外两根轴的方向指向是会随这个元素的面旋转而动态改变的

transform-style: preserve-3d;
在父元素上面创建一个3d空间,其中的子元素都会在这个3d空间内

## 值得注意的一些细节
将一个盒子设定一个position: absolute;top,left,right,bottom 都为 0,这个盒子会相对于定位的父级元素拉满宽高