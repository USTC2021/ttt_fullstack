/**
 * leetcode剑指Offer53 - I. 在排序数组中查找数字 I
 * @param {number []} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    // 统计次数
    var count = 0
    // 数组的值都比target大
    if (nums[0] > target) return count
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            count++
        } 
        if (nums[i] > target) break
    }
    return count
}

var nums = [5, 7, 7, 8, 8, 10]
var target = 8
console.log(search(nums, target))

var target = 6
console.log(search(nums, target))