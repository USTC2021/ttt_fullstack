/**
 * leetcode面试题60. n个骰子的点数
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 数据过大，超时
var twoSum = function(nums, target) {
    var result = []
    if (nums.length == 0) 
        return result
    for (var i = 0; i < nums.length; i++) {
        var index = nums.indexOf(target - nums[i])
        // console.log(num[i], index, num)
        if (index != -1 && index > i){
            result[0] = nums[i]
            result[1] = nums[index]
            break
        }
    }
    return result
}

var nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target))

var nums = [2, 9, 11, 15], target = 9
console.log(twoSum(nums))

var nums = [], target = 9
console.log(twoSum(nums))

var nums = [10, 26, 30, 31, 47, 60], target = 40
console.log(twoSum(nums, target))