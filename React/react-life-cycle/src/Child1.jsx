import React, { Component } from 'react'

// 生命周期阶段一 挂载
class Child1 extends Component {
  // 生命周期阶段二 更新(state更新)
  state = {
    data: 1
  }

  componentWillMount() { // 即将挂载
    // const { list } = this.props
    // console.log('componentWillMount')
    // this.setState({
    //   list
    // })
  }

  componentDidMount() { // 已经挂载
    console.log('componentDidMount')
    this.interVal = setInterval(() => {
      console.log(123456)
      const list = this.state.slice(0)
      list.push(4)
    }, 1000)
  }

  update = () => {
    this.setState({
      data: this.state.data + 1
    })
  }

  // 生命周期阶段二 更新(props更新) 先走 componentWillReceiveProps
  componentWillReceiveProps(nowProps) {
    console.log(nowProps, this.props)
    // this.props, this.state 是上一次的 最新的通过参数给到
    let list = this.state.list.slice(0)
    list.splice(0, 3, ...(nowProps.list))
    this.setState({
      list
    })
  }
  // 该生命周期用来做性能优化 返回false时 阻止页面更新 state更新直接走shouldComponentUpdate
  shouldComponentUpdate(nowProps, nowState) {
    console.log(nowProps, nowState, this.props, this.state.data)
    if (this.state.data < 3) {
      return true
    }
    return false
  }

  componentWillUnmount() {
    // 清理操作
    // 定时器 全局绑定的方法
    clearInterval(this.interVal)
  }

  render() {
    return (
      <>
        <div onClick={this.update}>Child1 data: {this.state.data}</div>
        <ul>
          {
            this.state.list.map((el, i) => {
              return (
                <li key={i}>{el}</li>
              )
            })
          }
        </ul>
      </>
    )
  }
}

export default Child1