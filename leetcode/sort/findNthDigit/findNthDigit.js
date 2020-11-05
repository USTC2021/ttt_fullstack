/**
 * LeetCode剑指 Offer 44. 数字序列中某一位的数字
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    if (n < 0) return 0
    if (n >= 0 || n <= 9) {
        return n
    } else {
        var base = 1 // 位数
        var num = 9
    }
}

var n = 11
console.log(findNthDigit(n))