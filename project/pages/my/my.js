// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  test:function(res){
    wx.request({
      url: 'https://www.friendplace.cn/facecheck.php',
      method:'POST',
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      success:function(res){
        console.log(res)
      }
    })
  }
})