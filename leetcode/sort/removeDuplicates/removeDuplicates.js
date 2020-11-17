/**
 * LeetCode26. 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    var len = nums.length, count = 0
    if (nums[0] == nums[len - 1]) {
        nums.splice(i + 1, len - 1)
    } else {
        for (var i = 0, j = 1;i < len, j < len;) {
            // console.log(nums[i], nums[j], nums[len -1])
            if (nums[i] == nums[len - 1]) {
                nums.splice(i + 1, len - i)
                break
            }
            if (nums[i] != nums[j]) {
                if (count != 0) {
                    // console.log(i, j, nums[i], count)
                    // console.log(nums, len, j)
                    nums.splice(i + 1, count)
                    len -= count
                    j = i + 1
                    count = 0
                    // console.log(nums)
                }
                i++
                j++
            } else {
                count++
                j++
            }
        }
    }
    // console.log(nums)
    return nums.length
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