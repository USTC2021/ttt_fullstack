/**
 * LeetCode剑指 Offer 53 - II. 0～n-1中缺失的数字
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
    // var i = 0
    // for (; i < nums.length; i++) {
    //     if (nums[i] != i) 
    //         return i
    // }
    // return i

    // var len = nums.length, num = 0
    // // console.log(nums[len - 1])
    // if (nums[len - 1] + 1 == len) 
    //     return len
    // if (len == 1 && nums[0] == 1) 
    //     return num
    // var sum = nums[len - 1] * (len + 1) / 2
    // var sumNums = nums.reduce((prev, cur) => {
    //     return prev + cur
    // })
    // return sum - sumNums

    var len = nums.length
    // console.log(len)
    var rest = nums[len - 1] * (nums[len - 1] + 1) / 2 - nums.reduce((prev, cur) => {
        return prev + cur
    }, 0)
    // console.log(len, rest, sum, sumNums)
    if (rest == 0) {
        return nums[0] == 0 ? len : 0
    } 
    return rest
}

var nums = [0, 1, 3]
console.log(missingNumber(nums)) // 2

var nums = [0]
console.log(missingNumber(nums)) // 1

var nums = [0, 1]
console.log(missingNumber(nums)) // 2

var nums = [0, 1, 2, 3, 4]
console.log(missingNumber(nums)) // 5

var nums = [1]
console.log(missingNumber(nums)) // 0