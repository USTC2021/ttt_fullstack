// 一个类，只有一个实例
class SingleDog {
  show() {
    console.log('我是一个单例对象')
  }
  static getInstance() {
    // if (!SingleDog.instance) {
    //   SingleDog.instance = new SingleDog()  
    // }
    // return SingleDog.instance

    let instance = null 
    return (function() {
      if (!instance) {
        instance = new SingleDog()
      }
      return instance
    })()
  }
}

const s1 = SingleDog.instance()
const s2 = SingleDog.instance()
s1 === s2