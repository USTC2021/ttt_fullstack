// let fetch = require('node-fetch')

// function* gen() {
//   let url = 'https://api.github.com/users/github'  
//   let result = yield fetch(url)
//   console.log(result.bio)
// }

// let g = gen() // 遍历器对象
// let res = g.next() // 执行异步任务的第一阶段 fetch(url)
// console.log(res)
// // { value: Promise { <pending> }, done: false }
// res.value.then(function(data) {
//   return data.json()
// }).then(function(data) {
//   g.next(data)
// })


// 异步编程的发展史
// 1. 回调函数
// 2. promise
// 3. generator
// 4. async await


// let fetch = require('node-fetch')

// function* gen() {
//   let r1 = yield fetch('https://api.github.com/users/github');
//   let json1 = yield r1.json()

//   let r2 = yield fetch('https://api.github.com/users/github/followers');
//   let json2 = yield r2.json()

//   let r3 = yield fetch('https://api.github.com/users/github/repos');
//   let json3 = yield r3.json()
  
//   console.log([json1.bio, json2.documentation_url, json3.message].join('\n'));
// }

// // let g = gen()
// // let result1 = g.next()
// // result1.value.then(function(data) {
// //   return data.json()
// // }).then(function(data) {
// //   return g.next(data).value
// // }).then(function(data) {
// //   return data.json()
// // }).then(function(data) {
// //   return g.next(data).value
// // }).then(function(data) {
// //   return data.json()
// // }).then(function(data) {
// //   g.next(data)
// // })

// function run(gen) {
//   let g = gen()
//   function next(data) {
//     let result = g.next(data)

//     if (result.done) return

//     result.value.then(function(data) {
//       next(data)
//     })
//   }

//   next()
// }
// run(gen)
