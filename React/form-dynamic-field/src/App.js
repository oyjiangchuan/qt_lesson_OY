import React from 'react';
import logo from './logo.svg';
import './App.css';

class DynamicField extends React.Component {
  handleAdd = () => {
    this.props.onAdd()
  }
  handleSub = (i) => {
    this.props.onSub(i)
  }
  render() {
    const rule = this.props.rule
    return (
      <>
        <label>
          规则
        </label>
        {
          rule.map((preRle, i) => {
            return (
              <div key={i}>
                <label>
                  姓名
                </label>
                <input type="text" value={preRle.name} data-key='name' data-index={i} onChange={(event) => {
                  this.props.onFiledChange(event) // 这种写法可以多传递参数
                }} />
                <label>
                  年龄
                </label>
                {/* 受控组件 只要给表单加了value 就变成受控组件 */}
                <input type="text" value={preRle.age} data-key='age' data-index={i} onChange={ this.props.onFiledChange} />
                
                <button data-i={i} onClick={() => { this.handleSub(i) }}>-</button>
              </div>
            )
          })
        }
        <br />
        <button onClick={this.handleAdd}>++++</button>
      </>
    )
  }
}

class App extends React.Component {
  state = {
    date: '',
    rule: [
      { name: '', age: '' }
    ]
  }
  handleAdd = () => {
    let rule = this.state.rule.slice(0) // 先复制一份数据
    rule.push({name: '', age: ''})
    this.setState({
      rule
    })
  }
  handleSub = (i) => {
    let rule = this.state.rule.slice(0) // 先复制一份数据
    rule.splice(i, 1)
    this.setState({
      rule
    })
  }
  onFiledChange = (event) => {
    const key = event.target.dataset.key // 拿到自定义属性的值
    const index = event.target.dataset.index // 拿到自定义属性的值
    const value = event.target.value
    let rule = this.state.rule.slice(0) // 先复制一份数据
    rule[parseInt(index)][key] = value
    this.setState({
      rule
    })
  }
  render() {
    const { rule } = this.state
    return (
      <div>
        <label htmlFor="date">
          日期
        </label>
        <input type="date" id="date" />
        <br />
        <DynamicField rule={rule} onAdd={ this.handleAdd } onSub={ this.handleSub } onFiledChange={ this.onFiledChange }/>  {/* 动态加减的组件 */}
      </div>
    )
  }
}

export default App;
