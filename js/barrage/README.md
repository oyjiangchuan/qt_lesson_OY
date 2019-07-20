- H5 标签
    video  插入一段视频，有一个controls属性，控制视频的一些格式，可以设置width，和height

- input 标签
    当type="color"，可以添加取色板
    当type="range"，可以添加进度条,在这里为调节字体大小的功能
- 逻辑运算符 !
    如果一个操作数是一个对象，返回false;
    如果一个操作数是一个空字符串，返回false;
    如果一个操作数是一个非空字符串，返回false;
    如果一个操作数是一个数值0，返回true;
    如果一个操作数是任意的非零字符，返回false;
    如果一个操作数是null，返回true;
    如果一个操作数是NaN，返回true;
    如果一个操作数是undefined，返回true;

- JS知识
   class CanvasBarrage 创建一个CanvasBarrage类 
   其中有constructor
   constructor是一种用于创建和初始化class创建的对象的特殊方法，是构造器
   // 获取画布，操作画布
   this.ctx = canvas.getContext('2d')，这里是canvas自带的一个getContext方法
   // 合并对象，并全部挂载到this实例上
   Object.assign(this, defOpts, opts)
   // map es6中遍历数组的方法
   this.barrages = this.data.map(item => new Barrage(item,this)) 
   // 通过raf渲染动画，递归进行渲染
   requestAnimationFrame(this.render.bind(this))
   // 清除整个画布，canvas中自带的方法
   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
   //拿到当前视频播放的时间,原生方法
   let time = this.video.currentTime 
   // 遍历所有的弹幕，es5方法
   this.barrages.forEach()
   // 绘制文字,fillText方法,原生方法
   this.context.ctx.fillText