import React, { Component } from 'react';  // imrc快捷
import { is } from 'immutable'

class Header extends Component {  // 快捷cc
  shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props || {}
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
      return true // 代表更新
    }
    // thisProps.value = { a: 1, b: 2 }
    // nextProps.value = { a: 1, b: 2, c: 3}
    for (let key in nextProps) {
      if (!is(thisProps[key], nextProps[key])) { // immutable 中判断 immutable对象是否相等
        return true
      }
    }
    return false
  }
  render() {
    console.log(window.c++)
    return (
      <div>
        {this.props.value}
      </div>
    )
  }
}

export default Header;
