/**
 * leetcode剑指 Offer 57. 和为s的两个数字
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    // 数据过大，超时
    // var result = []
    // if (nums.length == 0) 
    //     return result
    // for (var i = 0; i < nums.length; i++) {
    //     var index = nums.indexOf(target - nums[i])
    //     // console.log(num[i], index, num)
    //     if (index != -1 && index > i){
    //         result[0] = nums[i]
    //         result[1] = nums[index]
    //         break
    //     }
    // }
    // return result

    // 数据过大，超时
    // var result = []
    // if (nums.length == 0) 
    //     return result
    // for (var i = 0; i < nums.length; i++) {
    //     var rest = target - nums[i]
    //     if (rest > nums[i]) {
    //         for (var j = i + 1; j < nums.length; j++) {
    //             if (rest == nums[j]) {
    //                 result[0] = nums[i]
    //                 result[1] = rest
    //                 break
    //             }
    //         }
    //     }
    // }
    // return result


    // 双指针
    let i = 0, j = nums.length - 1
    while (i < j) {
        let s = nums[i] + nums[j]
        if (s > target) 
            j--
        if (s < target)
            i++
        if (s === target)
            return [nums[i], nums[j]]
    }
    return []
}

var nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target)) // [2, 7]

var nums = [], target = 9
console.log(twoSum(nums)) // []

var nums = [2, 9, 11, 15], target = 9
console.log(twoSum(nums)) // []

var nums = [10, 26, 30, 31, 47, 60], target = 40
console.log(twoSum(nums, target)) // [10, 30]