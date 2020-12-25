// // 异步
// function a () {
//   setTimeout(() => {
//     console.log('aaaa')
//   }, 1000)
// }

// // 异步
// function b () {
//   setTimeout(() => {
//     console.log('bbbb')
//   })
// }

// // bbbb
// // aaaa
// a()
// b()

// 异步
function a () {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
      console.log('aaaa')
      resolve('ok')
    }, 1000)
  })
}

// 异步
function b () {
  setTimeout(() => {
    console.log('bbbb')
  })
}

// aaaa
// bbbb
// a().then(b)
a().then(() => {
  b()
})

// 第二个参数的效果与.catch效果一样
// a().then(() => {
//   b()
// }, () => {
//   console.log(123)
// })

// // 异步
// function a () {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//       console.log('aaaa')
//       reject('err')
//     }, 1000)
//   })
// }

// // 异步
// function b () {
//   setTimeout(() => {
//     console.log('bbbb')
//   })
// }

// // aaaa
// // bbbb
// a().catch(b)