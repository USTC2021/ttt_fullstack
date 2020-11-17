/**
 * LeetCode剑指 Offer 03. 数组中重复的数字
 * @param {number[]} nums
 * @return {number}
 */

 // 数据太大易于超时
// var findRepeatNumber = function(nums) {
//     if (nums[0] == nums[nums.length - 1]) {
//         return nums[0]
//     } 
//     for (var i = 0; i < nums.length; i++) {
//         // 截取i下标之后的剩余数组
//         var num = nums.slice(i + 1, nums.length)
//         // console.log(num, nums)
//         if (num.indexOf(nums[i]) != -1) {
//             return nums[i]
//         }
//     }
// }


var findRepeatNumber = function(nums) {
    var result = []
    for (var i = 0; i < nums.length; i++) {
        if (result.indexOf(nums[i]) != -1) {
            return nums[i]
        }
        result.push(nums[i])
    }
}

var nums = [2, 3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber(nums))

var nums = [0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(findRepeatNumber(nums))