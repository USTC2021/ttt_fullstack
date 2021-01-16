// 图片预加载
// class PreLoadImage {
//   // 占位图
//   static LOADING_URL = 'XXX'

//   constructor(imgNode) {
//     this.imgNode = imgNode
//   }

//   setSrc(targetUrl) {
//     this.imgNode.src = PreLoadImage.LOADING_URL

//     const image = new Image()
//     image.onload = () => { // targetUrl已缓存
//       this.imgNode.src = targetUrl
//     }
//     image.src = targetUrl
//   }
// }

// new PreLoadImage('image')



// 虚拟代理模式图片预加载
class PreLoadImage {
  constructor(imgNode) {
    this.imgNode = imgNode
  }

  setSrc(imgUrl) {
    this.imgNode.src = imgUrl
  }
}

class ProxyImage {
  // 占位图
  static LOADING_URL = 'XXX'

  constructor(targetImage) {
    this.targetImage = targetImage
  }

  setSrc(targetUrl) {
    this.targetImage.setSrc(ProxyImage.LOADING_URL)

    const virtualImage = new Image()
    virtualImage.onload = () => {
      this.targetImage.setSrc(targetUrl)
    }
    virtualImage.src = targetUrl
  }
}