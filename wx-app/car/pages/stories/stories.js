const db = require('../../assets/db')
let currentVidoe = null;
// pages/stories/stories.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories: db.stories,
    currentVid: null
  },

  play: function(event) {
    const vid = event.target.dataset.id;
    /* if (currentVidoe) {
      currentVidoe.pause();
    } */
    if (vid) {
      currentVidoe = wx.createVideoContext(vid + '');
      currentVidoe.play();
      currentVidoe.sendDanmu({
        text: '66666',
        color: 'red'
      });
      this.setData({
        currentVid: vid
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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