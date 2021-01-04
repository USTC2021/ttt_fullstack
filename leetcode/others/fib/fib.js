/**
 * leetcode509. 斐波那契数
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  // // 动态规划
  // if (n <= 1) 
  //   return n
  // let p = 0, q = 0, r = 1
  // for (let i = 2; i <= n; i++) {
  //   p = q
  //   q = r
  //   r = p + q
  // }
  // return r

  // // 通用公式
  // const sqrt5 = Math.sqrt(5)
  // const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n)
  // return Math.round(fibN / sqrt5)


  // // 递归
  // if (n <= 1)
  //   return n
  // return fib(n - 1) + fib(n - 2)

  // // 直接查找
  // let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040]
  // return arr[n]

  // 实现一万项
  let arr = [0n, 1n]
  if (n <= 1)
    return arr[n]
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  } 
  return arr[n]
}

let n = 4
console.log(fib(n))

n = 10000
console.log(fib(n))