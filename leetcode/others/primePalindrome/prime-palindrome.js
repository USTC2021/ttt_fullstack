/**
 * leetcode866. 回文素数
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function(N) {
  if (N == 1) 
    return N = 2
  // let str = N.toString()
  // let len = N.length
  // let restr = str.split('').reverse().join('')
  // console.log(restr)
  let flag = 0
  while (flag == 0) {
    let str = N.toString()
    let len = N.length
    let restr = str.split('').reverse().join('')
    if (str === restr) {
      if (isPrimeNumber(N)) {
        // console.log(isPrimeNumber(N))
        break
      }
      N++
    }
  }
  // console.log(N)
  return N
}

// 判断一个数是否是素数
function isPrimeNumber (n) {
  let flag = 0 // 标志不是素数
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0)
      return flag
  }
  return flag = 1
}

// let n = 6
// console.log(primePalindrome(n)) // 7

// let n = 8
// console.log(primePalindrome(n)) // 11

// let n = 11
// console.log(primePalindrome(n)) // 11

// let n = 13
// console.log(primePalindrome(n)) // 101

let n = Math.pow(10, 8)
console.log(primePalindrome(n)) // 100030001

// let n = 1
// console.log(primePalindrome(n)) // 2

// let n = 9989900
// console.log(primePalindrome(n)) // 100030001