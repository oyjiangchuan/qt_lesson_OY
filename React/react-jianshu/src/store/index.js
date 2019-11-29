// 整合每个页面下的store状态 整合在一起
// import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'  // 引入中间件
import { combineReducers } from 'redux-immutable'  // 和vuex中的module相似 分模块整合回来
import homeReducer from '../pages/home/store/reducer'
import headerReducer from '../common/header/store/reducer'
import loginReducer from '../pages/login/store/readucer'

// fromJS({ home: , detail: }) redux-immutable 的作用
const reducer = combineReducers({ // 模块整合
  home: homeReducer,
  header: headerReducer,
  login: loginReducer
})

const store = createStore(reducer, applyMiddleware(thunk)) // 创建了一个整合后的所有页面的默认store

export default store

// 默认导出
// default export 
// export default store
// import ... from './'
