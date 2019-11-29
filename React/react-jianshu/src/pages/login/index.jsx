import React, { Component } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style'
import * as actionCreators from './store/actionCreate';
import { connect } from 'react-redux'
class Login extends Component {
  state = {}
  userName = React.createRef() // ref
  passWord = React.createRef()
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号" ref={this.userName} /> {/* 非受控组件 表单元素都推荐使用受控组件 */}
          <Input placeholder="密码" type="password" ref={this.passWord} />
          <Button onClick={() => {
            console.log(this.userName.current.value)
            this.props.login(true)
          }}>登录</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login(status) {
      dispatch(actionCreators.changeLoginStatus(status))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);