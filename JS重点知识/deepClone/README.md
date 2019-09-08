- 为什么所有公司都考这道题
  内部有性能优化的考点
- 性能优化
  1. chrome 自带的性能优化工具
   console.warn console.error()
   console.time('for-in') console.timeEnd('for-in') 中间的for-in为任务标签
   顺序执行 瞬间执行
  2. for key in 性能不太好 用for代替, while最快
- 浅拷贝 返回的对象并不是独立的新的对象 跟直观理解有差异
- 浅拷贝 深拷贝 规避内存指向同一地址的问题
  返回新对象(数组) 可以解决 JSON.Parse(JSON.stringigy(obj)) 太简单的思路,碰到函数这种特殊对象类型就无法解决问题,不会转化
  JSON.Parse(JSON.stringigy(obj)) 会返回一个对象, 复杂的, function() {} 就不行
  但是可以解决大部分问题
- 递归
  大的问题 由多个类似 (clone) 的问题构成, 并且, 有一个退出条件
  clone 有多个JSON嵌套 由内到外的一层层解决
  一层的时候 直接返回(回溯)
