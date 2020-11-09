/**
 * LeetCode剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 * @param {number[]} nums
 * @return {number[]}
 */

var exchange = function(nums) {
    var oddArr = [], evenArr = [], j = 0, k = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            evenArr[j++] = nums[i]
        } else {
            oddArr[k++] = nums[i]
        }
    }
    // console.log(oddArr.concat(evenArr))
    return oddArr.concat(evenArr)
}

var nums = [1, 2, 3, 4]
console.log(exchange(nums))

var nums = [1, 2, 15, 18, 3, 4, 9, 11, 20]
console.log(exchange(nums))