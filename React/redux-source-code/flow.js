// 数据创建 修改 都有redux的一套流程
// const {
//   createState
// }
const defaultState = {
  num: 1
}
const { createStore } = require('redux')

// 返回值
function count(state = defaultState.num, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    default:
      return state;
  }
}

const store = createStore(count)

store.subscribe(() => {
  console.log('数据改变了')
})

store.dispatch({
  type: 'ADD'
})

console.log(store.getState())