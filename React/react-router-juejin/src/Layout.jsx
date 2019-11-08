import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom' // Route显示某个路由下的组件

let isLogin = false

class PrivateRoute extends Component {
  render() {
    const props = this.props
    return (
      <div>
        { isLogin ? <Route {...props}/> : null}  {/* 拦截了一下路由 */}
      </div>
    )
  }
}

function PriCom() {
  return (
    <div>私密</div>
  )
}

function Shouye() {
  return (
    <div>首页</div>
  )
}

function Guanzhu() {
  return (
    <div>关注</div>
  )
}

function Fe() {
  return (
    <div>前端</div>
  )
}

function Rd() {
  return (
    <div>后端</div>
  )
}

function Home() {
  return (
    <div>
      <div>
        <Link to="/home/index">首页</Link>
        <Link to="/home/guanzhu">关注</Link>  
        <Link to="/home/fe">前端</Link>
        <Link to="/home/rd">后端</Link>
        <Link to="/home/private">私密</Link>
      </div>
      <div className="mian">
        <Route path="/home/index" component={Shouye}></Route>
        <Route path="/home/guanzhu" component={Guanzhu}></Route> {/* 子路由的配置 */}
        <Route path="/home/fe" component={Fe}></Route>
        <Route path="/home/rd" component={Rd}></Route>
        <PrivateRoute path="/home/private" component={PriCom} />
      </div>
    </div>
  )
}

function Me() {
  return (
    <div>Me</div>
  )
}

class Layout extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <Route path='/home' component={Home}></Route>
          { isLogin && <Route path='/me' component={Me}></Route> }
        </div>
        <div className="footer">
          <Link to='/home'>home</Link>
          { isLogin && <Link to='/me'>me</Link> } {/* 当isLogin为ture时才有/me路由 体现出动态路由的特点 */}
        </div>
      </div>
    )
  }
}

export default Layout