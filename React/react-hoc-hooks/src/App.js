import React, { useState } from 'react';
import logo from './logo.svg';
import Drag from './Drag1'
import './App.css';
import WithDragAble from './WithDragAble'
import useDragable from './useDragable'

// react15 function组件 没有生命周期 没有this 没有state 只负责单纯的接收 props 渲染组件
// react16 hooks 作用: 组件之间逻辑复用 相比 HOC 解决了： 1. 层次过多(wrapper hell) 2.组件太大 3.难以理解的类; 可以让逻辑扁平化
// Promise -> async
function Header() {
  return (
    <h2>
      h2
    </h2>
  )
}

function Footer() {
  // state hooks
  const [count, setCount] = useState(0) // 相当于 state = { 0 }
  return (
    <div>
      foot: { count }
      <button onClick={ () => setCount(count+1) }>+</button>
    </div>
  )
}

// 自定义的hooks调用
function MyHooks() {
  const { style, handleDown } = useDragable() // 相当于 state = { 0 }
  return (
    <div style={style} onMouseDown={handleDown} className="drag">
     <h3>这是使用自定义hooks控制的</h3>
    </div>
  )
}
const Drag2 = WithDragAble(Header)

function App() {
  return (
    <>
      <Drag />
      <Drag2 />
      <Footer />
      <MyHooks />
    </>
  );
}

export default App;
