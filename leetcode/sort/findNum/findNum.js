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
    var i = nums.indexOf(target)
    // console.log(i) 
    // 查找比target大的元素所在位置
    var found
    if(i >= 0) {
        found = nums.findIndex(function (element) {
            return element > target
        })
        // console.log(found)
        count = found - i
    }
    if (found == -1 && nums[0] == target)
        count = nums.length
    if (found == -1 && nums[0] != target)
        count = nums.length - i
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

nums = [1, 1]
console.log(search(nums, target)) // 2

nums = [1, 4]
target = 4
console.log(search(nums, target)) // 1