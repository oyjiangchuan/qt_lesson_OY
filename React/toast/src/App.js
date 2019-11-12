import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toast from './Toast'

/* function App() {
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
} */

class App extends React.Component {
  state = {
    flag: false
  }
  render() {
    const { flag } = this.state
    return (
      <div>
        <button onClick={() => {
          Toast.addNotice('info', '内容一', 2000) // 设计全局弹窗API(单例) 核心ref Vue中使用extend
        }}>open</button>
        {/* <Toast show={flag}  /> */}
      </div>
    )
  }
}

export default App;
