// pages/sign/sign.js
Page({
  data: {
    position: "122.4,37.1",
    item: "晚自习",
    face: "5"
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
        console.log(res)
        that.setData({
          face: res.tempImagePath
        })
        that.upload();
       // console.log(that.data.face)
      }
    })
   setTimeout(function(){
      that.faceCheck();
    },3000)
  },
  upload:function(res){
    wx.uploadFile({
      url: 'https://www.friendplace.cn/friendplace/upload.php',
      filePath: this.data.face,
      name: 'test',
      success:function(res){
        console.log(res)
      }
    })
  },
  faceCheck: function(res) {
     wx.request({
       url: 'https://www.friendplace.cn/friendplace/facecheck.php',
       success:function(res){
         //console.log(res)
         var confidence = res.data.confidence
         var thresholds = res.data.thresholds['1e-4']
         if(confidence>thresholds){
           wx.showToast({
             title: '签到成功',
           })
         }
         else{
           wx.showToast({
             title: '信息不可信',
           })
         }
       }
     })
  },
})