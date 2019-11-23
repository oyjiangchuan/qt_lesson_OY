import React from 'react';
// import logo from './logo.svg';
import './App.css';
import immutable from 'immutable'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ColorRedWrapper from './RedColor' // 引入样式组件
// 可变
let a = [0, 1, 2]
a.push(3)
// 不可变
let immutableArr = immutable.fromJS([2, 3, 4]) // 用immutable把原生的数组转化 不可变
immutableArr.push(5)
// console.log(immutableArr.toJS()) // 2 3 4 不可变
let b = immutableArr.push(5) // 一定要返回一个新的 哪一个新的变量装着 才能改变
// console.log(b.toJS()) // 2 3 4 5

// 不可变数据
let obj = { 
  a: 1,
  b: {
    c: 2
  },
  d: {
    e: 3
  }
 }
// let obj1 = {
//   ...obj,
//   b: 2
// }
let imObj = immutable.fromJS(obj)
// onj.b && obj.b.c  getIn setIn 获取层次深的
// console.log(imObj.getIn(['b', 'c'], 'default')) // 得到obj下面的b.c 有就打印 没有就为default
let imObj1 = imObj.setIn(['d', 'e'], '修改d下面的e') // 结构共享 修改的是自己的 没修改的是imObj中的

// console.log(imObj1) // Map数据结构

class App extends React.Component {
  state = {
    store: imObj
  }
  handleSet = () => {
    // 使用了immutable就是不可变 不用再复制了
    let store = this.state.store.setIn(['d', 'e'], '修改了d下面的e')
    this.setState({
      store
    })
  }
  render() {
    const store = this.state.store
    return (
      <div>
       <ColorRedWrapper> {/* 样式组件 */}
          <p>123</p>
          <div>456</div>
       </ColorRedWrapper>
        <button onClick={this.handleSet}>+</button>
        <Header value={store.get('a')} />
        <Main value={store.get('b')} />
        <Footer value={store.get('d')} />
      </div>
    )
  }
}

export default App;
