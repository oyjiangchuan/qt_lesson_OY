const defaultList = [
  {
    name: 'Ipad',
    count: 3,
    price: 3000,
    checked: false
  },
  {
    name: 'Iphone',
    count: 3,
    price: 4000,
    checked: false
  },
]

// 浅复制 state 是上一次的 state 当前的模块的 state 相当于namespace命名空间
function shopCart(state, aciton) { // 这里会接收到dispatch发出的action行为
  switch (aciton.type) {
    case 'TOGGLE_CHECKED':
      return state.map((good, i) => {
        if (i === aciton.index) {
          return {
            ...good,
            checked: aciton.checked
          }
        }
        return good
      })
    case 'DEL': 
      return state.filter((good, i) => {
        return i !== aciton.index
      })
    default:
      return defaultList
  }
}

export default shopCart