/**
 * LeetCode剑指 Offer 03. 数组中重复的数字
 * @param {number[]} nums
 * @return {number}
 */

var findRepeatNumber = function(nums) {
    if (nums[0] == nums[nums.length - 1]) {
        return nums[0]
    } else {
        nums.sort((a, b) => a - b)
        var j = 1
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] == nums[j]) {
                return nums[i]
            }
            j++
        }
    }
}

var nums = [2, 3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber(nums))