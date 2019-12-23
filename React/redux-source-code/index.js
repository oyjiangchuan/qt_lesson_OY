
// createStore 作用就是由一个 reducer 生成 store
const createStore = (reducer) => {
  let currentState; // currentState相当于store 不是直接返回 而是通过暴露getState方法
  currentState = reducer({}, {
    type: '@@redux/INIT'
  })
  // 订阅
  let listeners = []
  function subscribe(cb) {
    listeners.push(cb)
  }

  function getState() {
    return currentState
  }
  // action 纯对象
  // dispatch -> action -> reducer -> store
  function dispatch(action) {
    // reducer
    currentState = reducer(currentState, action) // 注意这里的参数

    // 发布
    for (let cb of listeners) {
      cb()
    }
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}


function combineReducer(reducers) {
  let finalReducerKeys = Object.keys(reducers)
  // 生成reducer
  // reducer(state, action)
  // reducer -> store
  // action -> reducer -> store
  // { count: 0, count1: 1 }

  return (state = {}, action) => {
    console.log(state)
    let nextState = {}
    for (let i = 0; i < finalReducerKeys.length; i++) {
      let key = finalReducerKeys[i]
      let reducer = reducers[key]
      const previousState = state[key]
      nextState[key] = reducer({
        previousState,
        action
      })
    }
    return nextState
  }
}

export {
  createStore,
  combineReducer
}