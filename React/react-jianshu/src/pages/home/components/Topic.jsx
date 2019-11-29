import React, { Component } from 'react'; // 快捷键imrc
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'

// immutable 中有 Map fromJS({})
// List fromJS({})

class Topic extends Component { // 快捷键cc
  state = {}
  render() {
    const { list } = this.props
    // console.log(list)
    return (
      <TopicWrapper color="red">
        {
          list.map((item, i) => { // 
            return (
              <TopicItem key={i}>
                <img src={item.get('imgUrl')} className="topic-pic" />
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'topicList']) // 读取home模块下的state 因为划分了模块 且是immutable的数据 需要使用特定的api
  }
}
export default connect(mapStateToProps)(Topic);