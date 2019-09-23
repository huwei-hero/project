// pages/home/home.js
Page({
  data: {
    username:wx.getStorageSync('name'),
    swiper_img:[
      "/images/logo.png",
      "/images/logo.png",
      "/images/logo.png"
    ],
    icon:[
      {
        id: 1,
        name:"request_leave",
        img: "/images/leave.png",
        text:"请假管理"
      },
      {
        id: 2,
        name:"sign",
        img: "/images/sign.png",
        text: "考勤打卡"
      },
      {
        id: 3,
        name:"shop",
        img: "/images/shop.png",
        text: "理工商城"
      },
      {
        id: 4,
        name:"love",
        img: "/images/love.png",
        text: "为爱表白"
      },
      {
        id: 5,
        name:"find",
        img: "/images/lost.png",
        text: "失物招领"
      },
      {
        id: 6,
        name:"my",
        img: "/images/ours.png",
        text: "关于我们"
      }
    ]
  },

  onLoad: function (options) {
  
  },
  go:function(res){
    var index = res.currentTarget.id;
    if(index<6){
     var name = this.data.icon[index-1].name;
     console.log('/pages/' + name + '/' + name)
     wx.navigateTo({
        url: '/pages/' + name + '/' + name,
      })
    }
    else{
      wx.switchTab({
        url: '/pages/my/my',
      })
    }
  }
 
})