import React, { Component } from 'react'
import ReactDom from 'react-dom' // 把react组件放到浏览器上显示的功能
import { TransitionGroup, CSSTransition } from 'react-transition-group'

let key = 0

class Toast extends Component {
  state = {
    toastList: []
  }
  addNotice = (icon, content, duration) => {
    // console.log(icon, content, duration)
    key++
    const item = { key, icon, content, duration }
    let toastList = this.state.toastList.slice(0)
    toastList.push(item)
    this.setState({
      toastList
    })

    setTimeout(() => { // 过一段时间移除
      let toastList1 = this.state.toastList.slice(0)
      let index = toastList1.findIndex(item => item.key === key)
      toastList1.splice(index, 1)
      this.setState({
        toastList: toastList1
      })
    }, duration)

  }
  render() {
    const { toastList } = this.state
    /* const { show } = this.props
    if (!show) return null */
    return (
      <TransitionGroup>
        {
          toastList.map((toast) => {
            return (
              <CSSTransition key={toast.key} classNames="notice" timeout={300}>
                {/* <Notice {...toast} /> */}
                <li key={toast.key}>{toast.icon}:{toast.content}</li>
              </CSSTransition>
            )
          })
        }
      </TransitionGroup>
    )
  }
}

let instance = null // 单例模式 每次返回同一个 只在页面上创建一个div容器 使用全局变量控制 最简单的实现方法

export default {
  addNotice: function (icon, content, duration) {
    // ref
    if (instance) return instance.addNotice(icon, content, duration)

    let div = document.createElement('div')
    document.body.appendChild(div)
    let objRef = React.createRef() // 最新的ref
    // ref放到组件上,获取组件的实例
    ReactDom.render(<Toast ref={objRef} />, div)
    instance = objRef.current
    return objRef.current.addNotice(icon, content, duration) // 调用Toast组件实例上的方法
  }
};
