let arr = [1, [2, [3, 4]]]

// function flatten (arr) {
//   let result = []
//   for (let i = 0, len = arr.length; i < len; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatten(arr[i]))
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result
// }

// console.log(flatten(arr)) // [1, 2, 3, 4]

// console.log(arr.toString())

// reduce 
// function flatten (arr) {
//   return arr.reduce(function (prev, next) {
//     return prev.concat(Array.isArray(next) ? flatten(next) : next) 
//   }, [])
// }

// console.log(flatten(arr))

// 重要方法
function flatten (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
console.log(flatten(arr))