Page({
  data: {
    img_path: '',
    // text:'asc'
  },
  onReady: function () {
    wx.request({
      url: 'http://127.0.0.1:8000/miniProgramTest/',
      success(res) {
        console.log(res.data)
      }
    })
  },
  onClickHandler: function () {
    wx.request({
      url: 'http://127.0.0.1:8000/miniProgramTest/upload',
      success(res) {
        console.log(res.data)
      }
    })
  },
  uploadHandler: function () {
    var that = this
    wx.chooseImage({
      success: function (res) {
        const tempFilePath = res.tempFilePaths
        wx.uploadFile({
          url: 'http://127.0.0.1:8000/miniProgramTest/upload',
          filePath: tempFilePath[0],
          name: 'file',
          success(res) {
            console.log(res.data)
            that.setData({
              img_path: tempFilePath[0]
            })
          }
        })
      }
    })
  },
  imgChosenHandler: function () {
    wx.chooseImage({
      success: function (res) {
      }
    })
  },
})