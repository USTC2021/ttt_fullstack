// q3：[ [3, 2, 1].reduce(Math.pow), [].reduce(Math.pow) ]  // 该数组展示结果？
// [9, error]

// Math.pow 函数返回基数的指数次幂
// reduce 对空数组是不会执行回调函数的

let arr = [3, 2, 1]
let pow = function (a, b) {
  console.log(a, b)
  return a ** b
}
// 3 2
// 9 1
arr.reduce(pow) 