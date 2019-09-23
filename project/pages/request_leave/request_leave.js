// pages/request_leave/request_leave.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startdate:'',
    enddate:''
  },

  onLoad: function (options) {

  },
  submit:function(res){
    /*wx.request({
      url: '',
    })*/
    console.log(res)
  },
  setstart:function(res){
    console.log(res)
    this.setData({startdate:res.detail.value})
  },
  setend: function (res) {
    this.setData({ enddate: res.detail.value })
  }
})