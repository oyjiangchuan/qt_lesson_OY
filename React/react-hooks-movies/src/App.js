import React, { useMemo, useState, useCallback, useEffect } from 'react'; // 三个state的hooks 一个生命周期hooks
import logo from './logo.svg';
import './App.css';

let set1 = new Set()
let set2 = new Set()
// 每次数据改变 组件里面的所有的方法语句都会执行一遍,重新渲染
// 类的致命缺点 wrapper hell(包装地狱)
// class App extends React.Component {}
// react-XXX(reactRouter(connect()(App)))  hooks可以解决 扁平化
// 所有的hooks 都以use 开头
function App() {
  // state = { count: 0 }
  let [count, setCount] = useState(0) // 第一项是数字 第二项是修改该变量的方法
  let [time, setTime] = useState(0)

  // const calculate = count + ',' + time  每次渲染都会重新计算
  const calculate = useMemo(() => count + ',' + time, [count]) // 随count的变化 calculate才会变化 第一项计算的返回值 第二项依据count的改变计算(缓存结果)
  const fn1 = () => count + ',' + time
  // memorize
  const fn2 = useCallback(() => count + ',' + time, [count]) // 缓存函数
  set1.add(fn1)
  set2.add(fn2)
  // 模拟生命周期
  useEffect(() => {
    console.log(123)
    return () => {
      // return 出去的部分 当成 upMount 生命周期 卸载
      // 每次组件重新渲染 都会执行这里
      // clearTimer()
      console.log('卸载')
    }
  })
  return (
    <div>
      <div>time: {time}</div>
      <div>count: {count}</div>
      <div>calculate: {calculate}</div>
      <div>{set1.size} vs {set2.size}</div>
      <button onClick={() => { setCount(++count) }}>count++</button>
      <button onClick={() => { setTime(Date.now) }}>time change</button>
    </div>
  )
}

export default App;
