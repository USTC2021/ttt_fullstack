/**
 * leetcode866. 回文素数
 * @param {number} N
 * @return {number}
 */
// 超时
// var primePalindrome = function(N) {
//   // console.log(N.toString().length)

//   // 判断是否是回文数
//   let str = N.toString()
//   let len = str.length
//   if (len == 1) {
//     // 判断是否是素数
//     if (N == 1) N++
//     N = getPrimeNumber(N)
//     return N
//   }
//   if (len == 2) {
//     if (str[0] === str[1]) {
//       // 判断是否是素数
//       N = getPrimeNumber(N)
//       return N
//     }
//   }
  
//   // 其他情况的回文数
//   N = getPalindromes(N)
//   // console.log(N)
//   return N
// }

// // 获取回文数
// function getPalindromes(N) {
//   let flag = 0
//   while (flag == 0) {
//     flag = isPalindromes(N)
//     // console.log(N, flag)
//     // if (flag == 1) 
//     //   break
//     if (flag == 1) {
//       flag = isPrimeNumber(N)
//       // console.log(flag)
//       if (flag == 1) 
//         break
//         N++
//     }
//     N++
//   }
//   return N
// }

// function isPalindromes(N) {
//   let str = N.toString()
//   let i = 0, j = str.length - 1, flag = 1
//   while (i <= j) {
//     // console.log(i, j, str[i], str[j])
//     if (str[i] != str[j]) {
//       flag = 0 // 不是回文数
//       break
//     }
//     i++ 
//     j--
//   }
//   return flag
// }

// function getPrimeNumber (N) {
//   // 获取素数
//   let flag = 0
//   while (flag == 0) {
//     flag = isPrimeNumber(N)
//     if (flag == 1)
//       break
//     N++
//   }
//   return N
// }

// // 判断一个数是否是素数
// function isPrimeNumber (n) {
//   let flag = 0 // 标志不是素数
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i == 0)
//       return flag
//   }
//   return flag = 1
// }

// // let n = 6
// // console.log(primePalindrome(n)) // 7

// // let n = 8
// // console.log(primePalindrome(n)) // 11

// // let n = 11
// // console.log(primePalindrome(n)) // 11

// // let n = 13
// // console.log(primePalindrome(n)) // 101

// // let n = Math.pow(10, 8)
// // console.log(primePalindrome(n)) // 100030001

// // let n = 1
// // console.log(primePalindrome(n)) // 2

// let n = 9989900
// console.log(primePalindrome(n))



var primePalindrome = function(N) {
  if (N == 1) 
    return 2
  
  // 判断是否是素数 
  let prime = function (num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false
    }
    return true
  }

  while (N > 0) {
    let len = N.toString().length
    if (len % 2 == 0 && N != 10 && N != 11)
      N = Math.pow(10, len)
    let a = N.toString()
    let b = a.split('').reverse().join('')
    if (a+b == b+a) {
      if (prime(N)) {
        return N
      } else {
        N++
      }
    } else {
      N++
    }
  }

  return N
}

// let n = 6
// console.log(primePalindrome(n)) // 7

// let n = 8
// console.log(primePalindrome(n)) // 11

// let n = 11
// console.log(primePalindrome(n)) // 11

// let n = 13
// console.log(primePalindrome(n)) // 101

// let n = Math.pow(10, 8)
// console.log(primePalindrome(n)) // 100030001

// let n = 1
// console.log(primePalindrome(n)) // 2

let n = 9989900
console.log(primePalindrome(n)) // 100030001