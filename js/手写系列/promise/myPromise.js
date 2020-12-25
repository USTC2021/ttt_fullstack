const PENDING = 'pending'
const RESLOVED = 'resolved'
const REJECTED = 'rejected'

// promise 中 .then 和 .catch 不可能同时执行
function myPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []

  function reslove(value) {
    if (that.state === PENDING) {
      that.state = RESLOVED
      that.value = value
      that.resolvedCallbacks.map(cb => { // cb promise的.then中的回调函数
        cb(that.value)
      })
    }
  }
  
  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.map(cb => { 
        cb(that.value)
      })
    }
  }

  // fn(reslove, reject)
  try {
    fn(reslove, reject)
  } catch (error) {
    reject(error)
  }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }

  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }

  if (that.state === RESLOVED) {
    onFulfilled(that.value)
  }

  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}

// 测试
// function a () {
//   return new myPromise((resolve, reject) => {
//       setTimeout(() => {
//       console.log('aaaa')
//       resolve('ok')
//     }, 1000)
//   })
// }

// function b () {
//   setTimeout(() => {
//     console.log('bbbb')
//   })
// }

// a().then(() => {
//   b()
// })