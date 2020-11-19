/**
 * leetcode283. 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    // for (var i = nums.length; i--;){
    //     if (nums[i] == 0) {
    //         nums.splice(i, 1)  // 删除该元素
    //         nums.push(0)
    //     }
    // }
    // return nums

    var j = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != 0)
            nums[j++] = nums[i]
    }
    for (var i = j; i < nums.length; i++)
        nums[i] = 0

    return nums
}

var nums = [0, 1, 0, 3, 12]
console.log(moveZeroes(nums)) // [1,3,12,0,0]

var nums = [0, 0, 1]
console.log(moveZeroes(nums)) // [1, 0, 0]