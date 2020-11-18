/**
 * LeetCode剑指 Offer 56 - II. 数组中数字出现的次数 II
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var len = nums.length
    if (len == 1) 
        return nums[0];
    // 将数组进行排序
    nums.sort((a, b) => a - b)
    for (var i = 0; i < len; i++) {
        if (nums[i] != nums[i + 1] && nums[i - 1] != nums[i]) 
            return nums[i];
    }
}

var nums = [3, 4, 3, 3]
console.log(singleNumber(nums))

var nums = [9, 1, 7, 9, 7, 9, 7]
console.log(singleNumber(nums))

var nums = [9]
console.log(singleNumber(nums))