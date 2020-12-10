let arr = [1, 2, 3]
// arr.map(x => {
//   return x + 1
// })

// const add = x => {
//   return x + 1
// }
arr.map(add)
console.log(arr.map(parseInt))

// parseInt：把 xxx 进制的字符串转化成整型
// 2 ~ 36 进制
// 0 进制 默认变成 10 进制
// 1 进制 不合法