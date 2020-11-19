/**
 * leetcode剑指 Offer 16. 数值的整数次方
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

 // 超时
// var myPow = function(x, n) {
//     var num = 1
//     for (var i = 0; i < Math.abs(n); i++) 
//             num *= x
//     if (n < 0) {
//         num = 1 / num
//     }
//     return num.toFixed(5)
// }

var myPow = (x, n) => x ** n // Math.pow(x, n)

var x = 2.00000, n = 10
console.log(myPow(x, n)) // 1024.00000

var x = 2.00000, n = 1
console.log(myPow(x, n)) // 2.00000

var x = 2.00000, n = 0
console.log(myPow(x, n)) // 1.00000

var x = 2.10000, n = 3
console.log(myPow(x, n)) // 9.26100

var x = 2.00000, n = -2
console.log(myPow(x, n)) // 0.25000

// 超时
var x = 2.00000, n = -2147483648
console.log(myPow(x, n)) 