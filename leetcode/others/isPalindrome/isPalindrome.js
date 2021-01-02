/**
 * leetcode9. 回文数
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // // 暴力法
  // x = x.toString()
  // for (let i = 0; i < x.length / 2; i++) {
  //   if (x[i] !== x[x.length - i - 1])
  //     return false
  // }
  // return true

  // // 库函数
  // let xx = x.toString().split('').reverse().join('')
  // // console.log(typeof(x), xx)
  // return xx === x.toString()

  return x.toString().split('').reverse().join('') === x.toString()
}

let x = 121
console.log(isPalindrome(x))

x = -121
console.log(isPalindrome(x))

x = 10
console.log(isPalindrome(x))