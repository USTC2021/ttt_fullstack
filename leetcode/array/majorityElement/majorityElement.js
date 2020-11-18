/**
 * LeetCode剑指 Offer 39. 数组中出现次数超过一半的数字
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    if (nums.length == 1) 
        return nums[0]
    var len = nums.length, j = 1, count = 0
    nums.sort((a, b) => a - b)
    // console.log(nums)
    for (var i = 0; i < len; i++) {
        if (nums[i] == nums[j]) {
            while(nums[i] == nums[j]) 
                j++
            // console.log(i, j)
            count = j - i
        }
        // console.log(nums[i], count, len / 2)
        if (count > len / 2) {
            // console.log(nums[i])
            return nums[i]
        } else {
            count = 0
            i = j - 1
            j++
        }
    }
}

var nums = [1, 2, 3, 2, 2, 2, 5, 4, 2]
console.log(majorityElement(nums))

var nums = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(nums))

var nums = [2]
console.log(majorityElement(nums))