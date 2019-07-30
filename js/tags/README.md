- 参数 js比较松散, arguments 
  event 在第一位置 事件注册和处理函数的分离
  event.target event.targrt.tagName(返回大写的标签名)
  事件处理中,this指向事件发生的元素, 但是在箭头函数中this会丢失, 指向它的上一级

- ajax fetch 让我们可以 主动的发起请求数据, 动态网页 fetch('/data.json')
  返回的是可读流,要转换成json格式的数据.then(data => data.json())

- 遍历数组
  1. 常规的for循环
    for (let i = 0; i < Array.length; i++) {}
  2. forEach() // 高阶函数,该函数的参数也是一个函数 [].forEach(fn)
    Array.forEach((info, index)=> {})
    forEach()中装一个回调函数作为参数,此回调函数的第一个参数info为该数组的每一项,第二个参数为该数组的下标
  3. for ( of )
    for(let info of infos) {}
    和for()循环差不多,但是使用起来更加方便

- 数组的.filter方法
  Array.filter(student => student.id == id)
  里面跟一个回调函数,会对该数组的每一项都进行操作,该回调函数必须要有返回值
  如上这种箭头函数的写法,箭头左边只有一个参数可以省略括号,箭头右边只有一句语句可以省略花括号,表示返回该语句;
  filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
  注意： filter() 不会对空数组进行检测。
  注意： filter() 不会改变原始数组。

- 如果有多个兄弟点击事件需要监听,可以选择对父级的事件进行监听,利用事件冒泡的机制,但是此时的event.target代表的是事件的源头,而this则是指当前的监听事件
