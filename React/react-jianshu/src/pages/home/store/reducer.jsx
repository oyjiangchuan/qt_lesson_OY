import { fromJS } from 'immutable' // 整个数据全部immutable 化
import * as CONSTANTS from './constant'


const defaultState = fromJS({
  topicList: [],
  articleList: [],
  articlePage: 1
})

function homeReducer(state = defaultState, action) {
  switch (action.type) {
    case CONSTANTS.CHANGE_HOME_DATA:
      return state.merge({ // 合并 immutable的api
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case CONSTANTS.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(fromJS(action.list)),
        articlePage: action.nextPage // 数字字符串不用处理 只处理数组和对象
      })
    default:
      return state
  }
}

export default homeReducer