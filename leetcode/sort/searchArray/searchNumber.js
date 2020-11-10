/**
 * LeetCode81. 搜索旋转排序数组 II
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] == target) return true
    }
    return false
}

var nums = [4, 5, 6, 7, 0, 1, 2]
var target = 0
console.log(search(nums, target))

var nums = [2, 5, 6,0, 0, 1, 2]
var target = 3
console.log(search(nums, target))

var target = 0
console.log(search(nums, target))