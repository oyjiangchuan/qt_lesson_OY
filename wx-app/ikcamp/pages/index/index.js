'use strict';

import util from '../../utils/index'
import config from '../../utils/config'

let app = getApp()
let isDEV = config.isDev

let handler = {
  data: {
    page: 1, // 当前页数
    pageSize: 4,
    days: 3,
    totalSiza: 0,
    hasMore: true,
    articleList: [], // 存放文章列表数据
    defaultImg: config.defaultImg
  },
  onLoad() {
    this.requestArticle()
  },
  // 请求文章数据
  requestArticle() {
    util.request({
      url: 'list',
      mock: true,
      data: {
        tag: '微信热门',
        strat: this.data.page || 1,
        days: this.data.days || 3,
        pageSize: this.data.pageSize,
        langs: config.appLang || 'en'
      }
    })
      .then(res => {
        if (res && res.status === 0 && res.data && res.data.length) {
          let articleData = res.data
          util.log(articleData)
          // 格式化原始数据
          let formatData = this.formatArticleData(articleData)
          // 把数据添加数据源
          this.renderArticle(formatData)
        } else if (this.data.page === 1 && res.data.length === 0) {
          util.alert()
        } else if (this.data.page !== 1 && res.data.length == 0) {
          this.setData({
            hasMore: false
          })
        } else {
          util.alert('提示', res)
          this.setData({
            hasMore: false
          })
          return null
        }
      })
  },
  // 日期'2019-08-16' => 显示今日
  // 日期'2019-08-15' => 显示2019-08-15
  // 格式化时间的函数
  dataConvert(dataStr) {
    if (!dataStr) {
      return ''
    }
    let today = new Date(),
      todayYear = today.getFullYear(),
      todayMonth = ('0' + (today.getMonth() + 1)).slice(-2),
      todayDay = ('0' + (today.getDate())).slice(-2)
    let convertStr = '',
        originYear = +dataStr.slice(0, 4),
        originMonth = +dataStr.slice(5, 7),
        originDay = +dataStr.slice(8, 10)
    let todayFormat = `${todayYear}-${todayMonth}-${todayDay}`
    if (dataStr == todayFormat) {
      convertStr = '今日'
    } else if (originYear < todayYear) {
      let splitStr = dataStr.split('-')
      convertStr = `${splitStr[0]}年${splitStr[1]}月${splitStr[2]}日`
    } else if (originYear = todayYear && originMonth <= todayMonth && originDay <= todayDay) {
      let splitStr = dataStr.split('-')
      convertStr = `${splitStr[0]}年${splitStr[1]}月${splitStr[2]}日`
    }
    else {
      convertStr = dataStr.slice(5).replace('-', '月') + '日'
    }
    return convertStr
  },

  // 格式化文章列表数据
  formatArticleData(data) {
    let formatData = undefined
    if (data && data.length) {
      formatData = data.map((group) => {
        // 在group中添加formateData
        group.formateData = this.dataConvert(group.date)
        return group
      })
    }
    return formatData
  },

  renderArticle(data) {
    if (data && data.length) {
      let newList = this.data.articleList.concat(data)
      this.setData({
        articleList: newList,
        hiddenLoading: true
      })
    }
  },

  onReachBottom() { // 监听用户下拉刷新事件。
    if (this.data.hasMore) {
      let nextPage = this.data.page + 1
      this.setData({
        page: nextPage
      })
      this.requestArticle()
    }
  }
}
Page(handler)
