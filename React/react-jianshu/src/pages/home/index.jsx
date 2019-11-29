import React from 'react';
import { connect } from 'react-redux'
import BaseComponent from '../../lib/BaseComponent'
import { HomeWrapper, HomeLeft } from './style'
import Topic from './components/Topic'
import List from './components/List';

// import { actionCreators } from './store/index'
import { actionCreators } from './store/index'
class Home extends BaseComponent {
  state = {}
  componentDidMount() {
    this.props.changeHomeData()
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img'
            alt=''
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
      </HomeWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      // 发起一个action 以前是纯对象 也可以使用 中间件 这里使用 redux-thunk action 可以变为一个方法
      dispatch(actionCreators.getHomeInfo())
    }
  }
}

export default connect(null,mapDispatchToProps)(Home);