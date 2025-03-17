export const request = (url) => {
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        success: res => resolve(res.data),
        fail: reject
      })
    })
  }