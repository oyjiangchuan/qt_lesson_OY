import React, { Component } from 'react'
import Context from './Context'
const { Consumer } = Context // 拿到数据引入Consumer
class SubSon extends Component {
  render() {
    return (
      <div>
        SubSon
        {/* 包裹一层, 返回一个方法 */}
        <Consumer>
          { 
            (theme) => { return ( <p style={{ color: theme }}>SubSon</p>)}
          }
        </Consumer>
      </div>
    )
  }
}

export default SubSon