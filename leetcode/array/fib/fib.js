/**
 * leetcode剑指 Offer 10- I. 斐波那契数列
 * @param {number} n
 * @return {number}
 */

var fib = function(n) {
    var num1 = 0, num2 = 1, num
    if (n == 0) return num1
    if (n == 1) return num2
    for (var i = 2; i <= n; i++) {
        // console.log(i, num1, num2, num)
        num = (num1 + num2) % (1000000007)
        num1 = num2
        num2 = num
    }
    return num 

    // var num = 1000000007
    // if (n < 2)
    //     return n
    // return (fib(n - 1) + fib(n - 2)) % num
}

var n = 2
console.log(fib(n)) // 1

var n = 5
console.log(fib(n)) // 5

var n = 45
console.log(fib(n)) // 134903163

var n = 81
console.log(fib(n)) // 107920472