import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducer from './reducer/index'
import { createStore, applyMiddleware } from 'redux' //生成全局的数据 使用redux提供的API createStore
import { Provider } from 'react-redux' // 引入全局数据的Provider
import thunk from 'redux-thunk' // 引入redux-thunk中间件
const store = createStore(reducer, applyMiddleware(thunk))
// sub
// store.subscribe(
//   ReactDOM.render( // 用Provider包裹App组件 把数据传入下面所有的子组件
//       <App />
//     document.getElementById('root'))
// );
ReactDOM.render( // 用Provider包裹App组件 把数据传入下面所有的子组件
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
