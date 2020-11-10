/**
 * LeetCode33. 搜索旋转排序数组
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    return nums.indexOf(target)
}

var nums = [4, 5, 6, 7, 0, 1, 2]
var target = 0
console.log(search(nums, target))

var target = 3
console.log(search(nums, target))

var nums = [1]
var target = 0
console.log(search(nums, target))