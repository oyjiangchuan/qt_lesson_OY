import React, { Component } from 'react';
import { connect } from 'react-redux'
// <PrivateRoute path="/write" Com={} />
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component {
  state = {}
  render() {
    const { login, Com, children, ...restProps } = this.props // 其他的参数原封不动的交给Route组件
    return (
      <>
        <Route {...restProps} render={() => {
          if (login) { 
            // return <Com /> 第一种写法 
            return children  // 第二种写法
          }
          else { 
            return <Redirect to="/" /> 
          }
        }} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.getIn(['login', 'login'])
  }
}

export default connect(mapStateToProps)(PrivateRoute);