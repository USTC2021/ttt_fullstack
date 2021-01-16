// 客户端 -> DNS -> 代理服务器 -> 目标服务器

// 代理模式的思想：让一个对象里面的属性能够被访问，但是是可以添加条件的，
// 不像原生js里面那样想访问就能访问，而现在是被某个平台给代理了，你想访
// 问则需要经过某个平台的同意

// Proxy

// const proxy = new Proxy(obj, handler) 

// 礼物
const persent = {
  type: '巧克力',
  value: 60
}

// 未知女生
const girl = {
  name: '大白',
  aboutMe: '...',
  age: 22,
  career: 'teacher',
  fakeAvatar: 'xxxx',
  avatar: 'xxxx',
  phone: '123456',
  persents: [],
  bottomValue: 50,
  lastPersent: persent
}

// 普通信息
const baseInfo = ['age', 'career']

// 私密信息
const privateInfo = ['avatar', 'phone']

const user = {
  isvalidated: true,
  isVip: false
}

const xklovers = new Proxy(girl, {
  get: function (girl, key) {
    if (baseInfo.indexOf(key) !== -1 && !user.isvalidated) {
      alert('您还没有完成认证哦!')
      return
    }
    // 校验...
    if (user.isvalidated && privateInfo.indexOf(key) && !user.isVip) {
      alert('只有vip才可以查看信息')
      return
    }
  },

  set: function(girl, key, val) {
    if (key === 'lastPersent') {
      if (val.value < girl.bottomValue) {
        alert('sorry，您的礼物被拒收了！')
        return
      }
    }

    girl.lastPersent = val
    girl.persents = [...girl.persents, val]
  }
})