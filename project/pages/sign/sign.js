// pages/sign/sign.js
Page({
  data: {
    position: "122.4,37.1",
    item: "晚自习",
    face: "5"
  },
  onLoad: function(res) {

  },
  sign: function(res) {
    var that = this;
    that.getFace();
  },
  getFace: function(res) {
    var that = this;
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      success: function(res) {
        //console.log(res)
        that.upload_img(res.tempImagePath);
      }
    })
  },
  upload_img: function(e) {
    console.log(e)
    var imgPath = e;
    wx.uploadFile({
      url: 'https://www.friendplace.cn/project/sign/faceCheck.php',
      filePath: imgPath,
      name: 'test',
      formData: {
        sno: wx.getStorageSync('sno')
      },
      success: function(res) {
        var result = JSON.parse(res.data);
        var confidence = result.confidence
        var thresholds = result.thresholds['1e-4']
        console.log(result)
        var flag = confidence > thresholds ? true : false;
        if (flag) {
          wx.showToast({
            title: '签到成功',
          })
          setTimeout(function() {
            wx.switchTab({
              url: '/pages/home/home',
            })
          }, 1500)
        } else {
          wx.showToast({
            title: '信息不符',
          })
          wx.showToast({
            title: '请重新签到',
          })
        }
      }
    })
  },
})