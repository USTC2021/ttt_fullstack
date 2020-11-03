/**
 * LeetCode剑指 Offer 45. 把数组排成最小的数
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    return nums.sort((a, b) => {
        return (''+a+b) - (''+b+a)
    }).join('')
}

var arr = [3, 30, 34, 5, 9]
console.log(minNumber(arr)) // 3033459

var arr = [10, 2]
console.log(minNumber(arr)) // 102