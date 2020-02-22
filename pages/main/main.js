Page({
  data: {
    img_path: '',
    chosen: false,
    uploaded: false,
    done: false
  },
  onClickHandler: function () {
    const that = this
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        that.setData({
          img_path: tempFilePaths[0],
          chosen: true
        })
      }
    })
  },
  uploadHandler: function () {
    const that = this
    wx.uploadFile({
      url: '',
      filePath: that.img_path,
      success(res) {
        that.setData({
          uploaded: true
        })
        //TODO loading
      }
    })
  }
})