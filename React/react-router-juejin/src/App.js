import React, { Component } from 'react';
import reactDom from 'react-dom'
// import logo from './logo.svg';
import { createStore } from 'redux' // redux
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './Layout'
import './App.css';

// reducer决定Store 长什么样 reducer是一个纯函数
// state 就是上一份 state
// action 就是提交过来的
function reducer(state, action) { // 兼顾了有actions和没有actions情况
  if (!state) return { count: 4 }
  const { count } = state
  if (action.type === 'ADD') {
    // 不可变数据 返回全新的对象
    return {
      count: count + 1
    }
  }
  if (action.type === 'SUB') {
    // 不可变数据 返回全新的对象
    return {
      count: count - 1
    }
  }
}

const store = createStore(reducer)

class Count extends Component {
  add = () => {
    store.dispatch({
      type: 'ADD' // 提倡一个type字段
    })
  }
  sub = () => {
    store.dispatch({
      type: 'SUB'
    })
  }
  render() {
    console.log(store.getState())
    return (
      <div>
        count: {store.getState().count}
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
      </div>
    )
  }
}

store.subscribe(() => {
  reactDom.render(<Count />, document.getElementById('root'))
})

reactDom.render(<Count />, document.getElementById('root'))



// 一切皆组件
// react-router 1. dom 2. native 3. 内存
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Route path='/' component ={Layout} /> {/* 访问根路由时 使用Layout */}
      </BrowserRouter>
    )
  }
}
export default App;
