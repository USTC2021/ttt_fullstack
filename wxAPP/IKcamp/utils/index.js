// 引入文件
import config from '/.config'
import * as Mock from '/.mock'

let util = {
    // 引入
    isDEV: config.isDev,
    log() {
        this.isDEV && console.log(...arguments)
    },
    alert(title = '提示', content = config.defaultAlertMessage){
        if (typeof content === 'object') {
            content = this.isDEV && JSON.stringify(content)
        }
        wx.showModal({
          title: title,
          content: content
        })
    },
    // 获取存储当中的数据
    getStorageData(key, cb) {
        wx:wx.getStorage({
          key: 'key',
          success (res) {
              cb && cb(res.data)
          },
          fail (err) {
              this.log(err)
          }
        })
    },
    setStorageData() {
        wx.setStorage({
          data: value,
          key: key,
          success () {
              cb && cb()
          }
        })
    },
    request (opt) {
        let {url, data, header, method, dataType, mock = false} = opt
        let self = this
        return new Promise((resolve, reject) => {
            if (mock) {
                let res = {
                    statusCode: 200,
                    data: Mock[url]
                } 
                if (res && res.statusCode == 200 && res.data) {
                    resolve(res.data)
                } else {
                    self.alert('提示', res)
                    reject(res)
                }
            } else {
                wx.request({
                    url: url,
                    data: data,
                    header: header || {'Content-Type': 'application/json'},
                    method: method || 'GET',
                    dataType: dataType || 'json',
                    success (res) {
                        if (res && res.statusCode == 200 && res.data) {
                            resolve(res.data)
                        } else {
                            self.alert('提示', res)
                            reject(res)
                        }
                    },
                    fail (err) {
                        self.log(err)
                        self.alert('提示', err)
                        reject(err)
                    }
                })
            }
        })
    }
}

export default util