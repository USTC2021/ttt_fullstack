// let arr = [1, 2, 3, 2, 0, 5, '6']
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))

// console.log (Math.max(true, '2', null))
// console.log (Math.min(1, '0', {}))

// 数组最大值与最小值
// 1. 原始方法
let arr = [1, 2, 3, 2, 0, 5, 8]
// function max(arr) {
//   let max = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max
// }

// 2. reduce
// function max(prev, next) {
//   return Math.max(prev, next)
// }
// console.log(arr.reduce(max))

// 3. 排序
// arr.sort(function (a, b) {
//   return b - a
// })
// console.log(arr[0])

// 4. eval
// let max = eval("Math.max(" + arr + ")") // 解构

// 5. apply 
// Math.max.apply(null, arr)