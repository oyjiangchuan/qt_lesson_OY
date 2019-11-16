import React, { Component } from 'react'
import Son from './Son'
import Context from './Context'
const { Provider } = Context  // 提供数据引入Provider
class Parent extends Component {
  state = {
    theme: 'red'
  }
  render() {
    return (
      <Provider value={this.state.theme}> {/* 哪里需, 要包裹一层 value 提供数据*/}
        <Son />
      </Provider>
    )
  }
}

export default Parent