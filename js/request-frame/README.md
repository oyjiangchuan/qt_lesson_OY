## 帧
刷新率 60Hz
60次 / 1000ms 一次花费的时间16.666ms

## 
1. 主进程
2. 插件
3. GPU
4. 渲染

## 渲染(进程) 里面有如下线程
1. js
2. http
3. 定时器 (会先放到一边)
4. 事件
5. 页面绘制布局

js 和 页面绘制布局 是互斥的
JS可以改变DOM 所以js是单线程语言

## event loop 事件轮询
  MacroTask(宏任务): 常见的同步的代码 setTimeOut setinterval
  MicroTask(微任务): Promise.then nextTick

  宏任务 -> 微任务 -> 渲染  宏任务 -> 微任务 ->  渲染 宏任务 ->  微任务 -> 渲染 


  第二个宏任务要等第一次宏任务执行完了之后才去执行
