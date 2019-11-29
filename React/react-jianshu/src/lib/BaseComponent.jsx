import React, { Component } from 'react';
import { is } from 'immutable'

class BaseComponent extends Component { // 写一个基类 抽离组件内的公共逻辑
  shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props || {}
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
      return true // 代表更新
    }
    // thisProps.value = { a: 1, b: 2 }
    // nextProps.value = { a: 1, b: 2, c: 3}
    // css in js 在js中写css css的模块历程 BEM -> stylus 批量生成类名 -> css-module(.text -> .text(hash)) -> css in js 样式定义成组件 
    // 好处: css变量和js变量共享
    for (let key in nextProps) {
      if (!is(thisProps[key], nextProps[key])) { // immutable 中判断 immutable对象是否相等
        return true
      }
    }
    return false
  }
}

export default BaseComponent;