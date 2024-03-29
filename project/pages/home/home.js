var app = getApp();
Page({
  data: {
    username: wx.getStorageSync('name'),
    swiper_img: [
      "/images/logo.png",
      "/images/logo.png",
      "/images/logo.png"
    ],
    icon: [{
        id: 1,
        name: "request_leave",
        img: "/images/lease00.png",
        text: "请假管理"
      },
      {
        id: 2,
        name: "sign",
        img: "/images/daka01.png",
        text: "考勤打卡"
      },
      {
        id: 3,
        name: "shop",
        img: "/images/shop01.png",
        text: "理工商城"
      },
      {
        id: 4,
        name: "love",
        img: "/images/love01.png",
        text: "为爱表白"
      },
      {
        id: 5,
        name: "find",
        img: "/images/lost01.png",
        text: "失物招领"
      },
      {
        id: 6,
        name: "my",
        img: "/images/us00.png",
        text: "关于我们"
      }
    ]
  },

  onLoad: function(options) {
    var that = this;
    app.getOpenid();
    that.setscope();
    setTimeout(function() {
      app.findHaveSign();
    }, 500)
  },
  setscope: function(res) {
    wx.authorize({
      scope: 'scope.userLocation',
    })
  },
  go: function(res) {
    var index = res.currentTarget.id;
    if (index < 6) {
      var name = this.data.icon[index - 1].name;
      console.log('/pages/' + name + '/' + name)
      wx.navigateTo({
        url: '/pages/' + name + '/' + name,
      })
    } else {
      wx.switchTab({
        url: '/pages/my/my',
      })
    }
  }

})