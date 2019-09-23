// pages/love/loveitem/loveitem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   list:
     {
       id:0,
       text:"表白话语巴拉巴拉",
       pit:"/images/logo.png",
     },
   con:[
     {
       id:0,
       content:"这是第一个评论"
     },
     {
       id: 1,
       content: "这是第二个评论"
     },
     {
       id: 2,
       content: "这是第三个评论"
     }
   ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({id:options.id})
 //   this.upload();
  },
 /* upload:function(res){
    var id = this.data.id
    wx.request({
      url: '',
      data:{
        id:id
      },
      success:function(res){
        
      }
    })
  }*/
})