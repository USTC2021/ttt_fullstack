// async/await 的原理是什么？把下面这段代码翻译成Promise
function getJson() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(2);
      resolve(2)
    }, 2000)
  })
}

async function testAsync() {
  await getJson()
  console.log(3);
}

testAsync() // 2 3 

// ------------------------------------ 解释
// function testAsync() {
//   return Promise.resolve().then(() => {
//     return getJson() // 返回一个Promise 后面可以接一个.then 
//   }).then(() => {
//     console.log(3);
//   })
// } 



// function a() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('a')
//     }, 1000)
//     resolve('ok')
//   })
// }

// function b() {
//   setTimeout(() => {
//     console.log('b')
//   }, 500)
// }

// function c() {
//   console.log('c')
// }

// a().then(() => {
//   b()
// }).then(() => {
//   c()
// })


// function getJson() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       console.log(2);
//       resolve(9999)
//     }, 2000)
//   })
// }

// async function testAsync() {
//   let data = await getJson()
//   console.log(3);
//   console.log(data)
// }

// testAsync() // 2 3 9999

// ------------------------------------ 解释
// function testAsync() {
//   return Promise.resolve().then(() => {
//     return getJson() // 返回一个Promise 后面可以接一个.then 返回结果给res
//   }).then((res) => {
//     let data = res   
//     console.log(3);
//     console.log(data)
//   })
// } 