/**
 * LeetCode剑指 Offer 56 - II. 数组中数字出现的次数 II
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = new Map(), number
    nums.forEach(item => {
        map.set(item, (map.get(item) || 0) + 1 )
    })
    // console.log(map)
    map.forEach((key, value) => {
        // console.log(key, value)
        if (key == 1) number = value
    })
    // console.log(number)
    return number
}


// var singleNumber = function(nums) {
//     for (var i = 0; i < nums.length; i++) {
//         if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
//             return nums[i]
//         }  
//     }
// }

var nums = [3, 4, 3, 3]
console.log(singleNumber(nums))

var nums = [9, 1, 7, 9, 7, 9, 7]
console.log(singleNumber(nums))

var nums = [9]
console.log(singleNumber(nums))