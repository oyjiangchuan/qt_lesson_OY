import React, { Component } from 'react';
import { HeaderWrapper, Nav, NavItem, Addition, Button, Logo, SearchWrapper, NavSearch} from './style';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreate'
// import To from '../../lib/PrivateRoute'
class header extends Component {
  state = {}
  render() {
    const { focus } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focus} classNames="slide">{/* 和vue-transition相似 */}
              <NavSearch onFocus={() => {this.props.handFocus(true)}} onBlur={() => {this.props.handFocus(false)}}></NavSearch>
            </CSSTransition>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writting'>
              <i className="iconfont">&#xe615;</i>
              写文章
						</Button>
          </Link>
          <Button className='reg'>注册</Button>
          <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
        </Addition>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    focus: state.getIn(['header', 'focus'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handFocus(status) {
      dispatch(actionCreators.searchFocus(status))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(header);