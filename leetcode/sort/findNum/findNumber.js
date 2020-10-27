/**
 * leetcode剑指Offer53 - I. 在排序数组中查找数字 I
 * @param {number []} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    // 统计次数
    var count = 0
    // 数组的值都比target大
    if (nums[0] > target) 
        return count
    // 查找数组中第一个与target相等的元素的下标
    var i = nums.indexOf(target)
    // console.log(i)
    if(i >= 0) {
        for (; i < nums.length; i++) {
            if (nums[i] > target) break
            count++
        }
    }
    return count
}

var nums = [5, 7, 7, 8, 8, 10]
var target = 8
console.log(search(nums, target)) // 2

target = 6
console.log(search(nums, target)) // 0

nums = [1]
target = 1
console.log(search(nums, target)) // 1