/**
 * LeetCode剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 * @param {number[]} nums
 * @return {number[]}
 */

var exchange = function(nums) {
    var left = 0, right = nums.length - 1, temp
    while(left < right) {
        if (left < right && nums[left] % 2 != 0) {
            left++
        }
        if (left < right && nums[right] % 2 == 0) {
            right--
        }
        if (left < right) {
            console.log(left, right)
            temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
        }
    }
    return nums
}

var nums = [1, 2, 3, 4]
console.log(exchange(nums))

var nums = [1, 2, 15, 18, 3, 4, 9, 11, 20]
console.log(exchange(nums))