/**
 * LeetCode剑指 Offer 56 - I. 数组中数字出现的次数
 * @param {number[]} nums
 * @return {number[]}
 */
// var singleNumbers = function(nums) {
//     var result = []
//     nums.sort((a, b) => a - b)
//     for (var i = 0; i < nums.length; i++) {
//         if (nums[i - 1] != nums[i] && nums[i] != nums[i + 1]) {
//             result.push(nums[i])
//         }
//     }
//     return result
// }

var singleNumbers = function(nums) {
    var map = new Map(), result = []
    nums.forEach(item => {
        map.set(item, (map.get(item) || 0) + 1)
    })
    map.forEach((key, value) => {
        if (key == 1) 
            result.push(value)
    })
    return result
}

var nums = [4, 1, 4, 6]
console.log(singleNumbers(nums))

var nums = [1, 2, 10, 4, 1, 4, 3, 3]
console.log(singleNumbers(nums))