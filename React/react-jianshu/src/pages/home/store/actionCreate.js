import axios from 'axios'
// import { fromJS } from 'immutable'
import * as constants from './constant'
// redux-thunk action 
export const getHomeInfo = () => {  // 外面这一层可以拿到组件传来的数据
  return (dispatch) => {  // 里面可以拿到dispatch
    axios.get('/api/home.json').then(res => { // 在action里面发送请求 得到数据
      console.log(res)
      const result = res.data.data
      dispatch({
        type: constants.CHANGE_HOME_DATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      })
    })
  }
}
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page)  // 分页请求的写法
    .then(res => {
      const result = res.data.data
      dispatch({
        type: constants.ADD_ARTICLE_LIST,
        list: result,
        nextPage: page
      })
    })
  }
}