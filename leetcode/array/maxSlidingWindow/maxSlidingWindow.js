/**
 * leetcode剑指 Offer 59 - I. 滑动窗口的最大值
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0)
    return []
  let tempArr, result = []
  for (let i = 0; i < nums.length - k + 1; i++) {
    tempArr = nums.slice(i, i + k)
    // console.log(tempArr)
    result.push(compare(tempArr))
  }
  // console.log(result)
  return result
}

function compare (arr) {
  return arr.sort((a, b) => {
    return b - a
  })[0]
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
console.log(maxSlidingWindow(nums, k)) // [3, 3, 5, 5, 6, 7]