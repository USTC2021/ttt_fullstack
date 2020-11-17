/**
 * LeetCode剑指 Offer 03. 数组中重复的数字
 * @param {number[]} nums
 * @return {number}
 */

// var findRepeatNumber = function(nums) {
//     nums = nums.sort((a, b) => a - b)
//     for (var i = 0; i < nums.length; i++) {
//         if (nums[i] == nums[i + 1]) {
//             return nums[i]
//         }
//     }
// }

var findRepeatNumber = function(nums) {
    var set = new Set()
    for (var i = 0; i < nums.length; i++) {
        var len = set.size
        set.add(nums[i])
        // console.log(set.size, i)
        if (set.size == len) {
            return nums[i]
        }
    }
}

var nums = [2, 3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber(nums))

var nums = [0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(findRepeatNumber(nums))