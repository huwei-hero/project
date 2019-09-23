// pages/shop/shop.js
Page({
  data: {
    kind: ["全部", "学习", "食品", "体育", "卡类","其他"],
    goods:[
      {
        id:0,
        name:""
      }
    ]
  },

  onLoad: function (options) {

  },
  search:function(res){

  },
  go:function(res){
    var index = res.currentTarget.id;
    wx.navigateTo({
      url: '/pages/shop/shopitem/shopitem?id='+index,
    })
  },
})
