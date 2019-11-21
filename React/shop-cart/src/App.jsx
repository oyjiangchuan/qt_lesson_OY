import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux' // 拿到的数据和哪个组件联系起来

class App extends React.Component {
  handleCheck = (e, i) => {
    const checked = e.target.checked
    this.props.checked(checked, i) // 发起dispatch行为
  }

  render() {
    const { shopCart } = this.props
    return (
      <div>
        {
          shopCart.map((good, i) => {
            return (
              <div key={i}>
                {/* <label htmlFor=""></label> */}
                <input type="checkbox" checked={good.checked} onChange={(e) => {
                  this.handleCheck(e, i)
                }} />
                <label>{good.name}/RMB:{good.price}</label>
                <button>-</button>
                {good.count}
                <button>+</button>
                <button onClick={() => {
                  this.props.handleDel(i)
                }}>delete</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => { // 可以过滤全局的store数据 只取需要的 这里使用就可以在props中取到
  console.log(state)
  return {
    shopCart: state.shopCart
  }
}

const del = (i) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "DEL",
        index: i
      })
    }, 2000)
  }
}


const mapDispatchToprops = (dispatch) => { // 可以修改数据 可以在props中取到
  return {
    checked(checked, i) {
      dispatch({ // dispacth action 一个纯对象 应该另一个文件内 
        type: "TOGGLE_CHECKED",
        checked,
        index: i
      })
    },
    handleDel(i) {
      dispatch(del(i)) // redux-thunk 中间件 dispacth action 可以是一个函数
    }
  }
}
export default connect(mapStateToProps, mapDispatchToprops)(App); // 关联的重要一步
