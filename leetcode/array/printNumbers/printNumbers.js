/**
 * leetcode剑指 Offer 17. 打印从1到最大的n位数
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let num = Math.pow(10, n), result = []
    // console.log(num)
    for (let i = 1; i < num; i++)
        result[i - 1] = i
    return result
}
let n = 0
console.log(printNumbers(n))