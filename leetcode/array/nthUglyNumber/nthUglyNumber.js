/**
 * LeetCode剑指 Offer 49. 丑数
 * @param {number} n
 * @return {number}
 */

// 超时
var nthUglyNumber = function(n) {
    var count = 1, num = 0
    // 判断一个数是否是丑数
    while (count <= n) {
        num++
        if(uglyNumber(num))
            count++
    }
    // console.log(num - 1)
    return num
}

function uglyNumber(num) {
    while (num % 2 == 0) 
        num /= 2
    while (num % 3 == 0) 
        num /= 3
    while(num % 5 == 0) 
        num /= 5
    // console.log(num)
    return num == 1 ? true : false
}

var n = 1 
console.log(nthUglyNumber(n)) // 1

var n = 10 
console.log(nthUglyNumber(n)) // 12

var n = 11
console.log(nthUglyNumber(n)) // 15

var n = 1407
console.log(nthUglyNumber(n)) // 536870912

var n = 1690
console.log(nthUglyNumber(n)) // 2123366400