// pages/love/love.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id: 0,
        text:"表白1"
      },
      {
        id:1,
        text:"表白2"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  look:function(res){
    var to = res.currentTarget.id
    wx.navigateTo({
      url: '/pages/love/loveitem/loveitem?id='+to,
    })
    //console.log(res)
  },
  good:function(res){

  }
})