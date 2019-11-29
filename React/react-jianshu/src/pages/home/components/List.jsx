import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore} from '../style';
import * as actionCreators  from '../store/actionCreate'
class List extends Component {
  state = {}
  render() {
    const { list, page } = this.props
    // console.log(list.toJS()) // 调试
    return (
      <div>
        {
          list.map((item, i) => {
            return (
              <Link to={'/detail/' + item.get('id')} key={i}>
                <ListItem >
                  <img alt='' className='pic' src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get("desc")}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => { // 这里可以拿到默认的参数
          this.props.getMoreList(page) // 分页加载
        }}>更多文件</LoadMore>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({  // 从redux中取数据
  
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})
const mapDispatchToProps = (dispacth) => {
  return {
    getMoreList(page) {
      // action 纯对象
      // 现在可以用函数
      dispacth(actionCreators.getMoreList(page))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);