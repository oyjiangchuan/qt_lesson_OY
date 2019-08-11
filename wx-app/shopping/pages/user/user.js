// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  payOrders() {
    wx.requestPayment({ // 发起微信支付
      timeStamp: 'String1', //时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间
      nonceStr: 'String2', // 随机字符串，长度为32个字符以下
      package: 'String3', // 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=***
      signType: 'MD5', // 签名算法
      paySign: 'String4', // 签名，具体签名方案参见
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        wx.showModal({ // 显示模态对话框
          title: '支付提示',
          content: '<text>',
          showCancel: false
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/orders.txt',
      success(res) {
        self.setData({
          orders: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getStorage({ // 从本地缓存中异步获取指定key的内容
      key: 'address',
      success: (res) => {
        console.log(res)
        this.setData({
          hasAddress: true,
          address: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})