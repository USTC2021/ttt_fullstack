// 发布订阅 实时更新
class EventEmitter {
  constructor () {
    // 存储事件
    this.events = this.events || new Map()
    // {
    //   'ages': function fn() {}
    // }
  }
  // 订阅事件/监听事件
  addListener (type, fn) {
    if (!this.events.get(type)) {
      this.events.set(type, fn)
    }
  }
  // 触发事件
  emit (type) {
    let handle = this.events.get(type)
    handle.apply(this, [...arguments].slice(1))
  }
}

let emitter = new EventEmitter()

emitter.addListener('ages', age => {
  console.log(age)
})

emitter.emit('ages', 18)