/**
 * leetcode剑指 Offer 15. 二进制中1的个数
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
    var count = 0
    var str = n.toString(2).toString()
    // console.log(n)
    for (var i = 0; i < str.length; i++) {
        if (parseInt(str[i]) === 1)
            count++
    }
    return count

    // var count = n.toString(2).match(/1/g)
    // return count ? count.length : 0
}

var n = 00000000000000000000000000001011
console.log(hammingWeight(n)) // 3

var n = 00000000000000000000000010000000
console.log(hammingWeight(n)) // 1

var n = 11111111111111111111111111111101
console.log(hammingWeight(n)) // 31