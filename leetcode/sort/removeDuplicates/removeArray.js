/**
 * LeetCode26. 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    var j = 0, len = nums.length
    for (var i = 1; i < len; i++) {
        if (nums[i] != nums[j]) {
            j++
            nums[j] = nums[i]
        }
    }
    return j + 1
}

var nums = [1, 1, 2]
console.log(removeDuplicates(nums)) // 2

var nums = [1, 1]
console.log(removeDuplicates(nums)) // 1

var nums = [1, 1, 1]
console.log(removeDuplicates(nums)) // 1

var nums = [1]
console.log(removeDuplicates(nums)) // 1

var nums = [1, 2]
console.log(removeDuplicates(nums)) // 2

var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums)) // 5

var nums = [1, 2, 2]
console.log(removeDuplicates(nums)) // 2

var nums = [-1, 0, 0, 0, 0, 3, 3]
console.log(removeDuplicates(nums)) // 3