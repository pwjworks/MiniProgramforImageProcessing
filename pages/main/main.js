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
    const data = this.data
    const that=this
    console.log(data.img_path)
    wx.uploadFile({
      url: 'http://127.0.0.1:8000/uploadServer/upload',
      filePath: data.img_path,
      name:'file',
      success(res) {
        that.setData({
          uploaded: true
        })
        console.log(res.data)
      }
    })
  }
})