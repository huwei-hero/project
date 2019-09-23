App({
  onLaunch: function (res) {
    wx.login({
      success(res) {
        wx.request({
          url: 'https://www.friendplace.cn/project/getuserinfo.php',
          method: 'POST',
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            if(res.data.length==1){
              wx.setStorageSync('openid', res.data[0])
              //tiaozhuan
              wx.redirectTo({
                url: '/pages/register/register',
              })
            }
            else{
              /*设置个人信息缓存*/
              wx.setStorageSync('openid', res.data[0].openid)
              wx.setStorageSync('classes', res.data[0].classes)
              wx.setStorageSync('name', res.data[0].name)
              wx.setStorageSync('sdept', res.data[0].sdept)
              wx.setStorageSync('faceurl', res.data[0].faceurl)
              wx.setStorageSync('tel', res.data[0].tel)
              wx.setStorageSync('lev', res.data[0].lev)
              wx.setStorageSync('sno', res.data[0].sno)
            }
            console.log(res);               //后台获取openid测试
          }
        })
      }
    })
  },
})
