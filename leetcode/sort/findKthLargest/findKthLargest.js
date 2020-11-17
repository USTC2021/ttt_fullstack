/**
 * LeetCode215. 数组中的第K个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a)
    return nums[k - 1]
}

var nums = [3, 2, 1, 5, 6, 4]
var k = 2
console.log(findKthLargest(nums, k))

var nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
var k = 4
console.log(findKthLargest(nums, k))