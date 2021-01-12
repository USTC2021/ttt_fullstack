/**
 * leetcode198. 打家劫舍
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // 暴力法
  let sum = [0, 0], result
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      sum[0] += nums[i]
      sum[0] = Math.max(sum[0], sum[1])
      console.log(i, sum[i], sum)
    } else {
      sum[1] += nums[i]
      sum[1] = Math.max(sum[0], sum[1])
      console.log(i, sum[i], sum)
    }
  }
  result = Math.max(sum[0], sum[1])
  return result
}

let nums = [1, 2, 3, 1]
console.log(rob(nums))

nums = [2, 7, 9, 3, 1]
console.log(rob(nums))

nums = [2, 1, 1, 2]
console.log(rob(nums))