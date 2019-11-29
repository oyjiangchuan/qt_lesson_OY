import React from 'react';
// router有两种；1. h5实现的history api; 2. hash change  BrowserRouter使用的是history
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import BaseComponent from './lib/BaseComponent'
import store from './store/index' // 引入整合的store
import Home from './pages/home/index';
import Login from './pages/login/index'
import Header from './common/header/index';
import './statics/iconfont/iconfont.js'
import PrivateRoute from './lib/PrivateRoute'

function Write() {
  return (
    <div>写文章页面</div>
  )
}

class App extends BaseComponent {
  render() {
    return (
      <Provider store={store}> {/* 提供一个全局的store */}
        {/* BrowserRouter 保存了全局的路由信息 要包起来 */}
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} /> {/* 精准匹配 只有访问/时才能显示组件 */}
            <Route exact path="/login" component={Login} /> {/* 精准匹配 只有访问/时才能显示组件 */}
            {/* <PrivateRoute path="/write" Com={Write} /> */} {/* 路由拦截的第一种写法 */}
            <PrivateRoute path="/write"> {/* 路由拦截的第二种写法 渲染子节点的写法 */}
              <Write />
            </PrivateRoute>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;
