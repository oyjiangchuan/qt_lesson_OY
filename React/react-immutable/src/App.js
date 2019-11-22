import React from 'react';
import logo from './logo.svg';
import './App.css';
import immutable from 'immutable'
// 可变
let a = [0, 1, 2]
a.push(3)
// 不可变
let immutableArr = immutable.fromJS([2, 3, 4]) // 用immutable把原生的数组转化 不可变
immutableArr.push(5)
console.log(immutableArr.toJS()) // 2 3 4 不可变
let b = immutableArr.push(5) // 一定要返回一个新的 哪一个新的变量装着 才能改变
console.log(b.toJS()) // 2 3 4 5

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
// onj.b && obj.b.c
console.log(imObj.getIn(['b', 'c'], 'default')) // 得到obj下面的b.c 有就打印 没有就为default
let imObj1 = imObj.setIn(['d', 'e'], '修改d下面的e') // 结构共享 修改的是自己的 没修改的是imObj中的

console.log(imObj1)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
