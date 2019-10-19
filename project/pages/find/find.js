Page({

  data: {

  },

  onLoad: function(options) {

  },
  uploadimg: function(res) {
    wx.uploadFile({
      url: 'https://www.friendplace.cn/project/setFace.php',
      filePath: '/images/logo.png',
      name: 'test',
      formData:{
        sno:wx.getStorageSync('sno')
      },
      success: function(res) {
        console.log(res)
      }
    })
  }
})