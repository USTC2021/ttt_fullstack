/**
 * leetcode剑指 Offer 61. 扑克牌中的顺子
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
  // let count = 0
  // for (let i = 0; i < nums.length; i++) {
  //   // console.log(nums[i])
  //   if (nums[i] === 'A') 
  //     nums[i] = 1
  //   if (nums[i] === 'J') 
  //     nums[i] = 11
  //   if (nums[i] === 'Q') 
  //     nums[i] = 12
  //   if (nums[i] === 'K') 
  //     nums[i] = 13
  //   if (nums[i] === 0) 
  //     count++
  //   if (nums[i] !== 0 && nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i]))
  //     return false
  // }
  // // 升序排序
  // nums.sort((a, b) => {
  //   return a - b
  // })
  // let diff = nums[4] - nums[0], diff1 = nums[4] - nums[1], diff2 = nums[4] - nums[2], diff3 = nums[4] - nums[3]
  // // console.log(count, diff, diff1, diff2)
  // if (((count === 0) && diff === 4) || ((count === 1) && (diff1 === 4 || diff1 === 3)) || ((count === 2) && (diff2 >= 2 && diff2 <= 4)) || ((count === 3) && (diff3 >= 1 && diff3 <= 4)) || count === 4)
  //   return true
  // return false

  // 将nums从小到大进行排序，并将数组中的0去除
  nums = nums.sort((a, b) => a - b).filter(item => item !== 0)
  // 找出数组中最大值与最小数，即数组的头和尾，判断其差是否大于4，若大于4，则不连续
  if (nums[nums.length - 1] - nums[0] > 4)
    return false
  // 遍历数组，判断是否有重复的数字
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) 
      return false
  }
  return true
}

// let nums = [1, 2, 3, 4, 5]
// console.log(isStraight(nums)) // true

// let nums = [0, 0, 1, 2, 5]
// console.log(isStraight(nums)) // true

// let nums = [0, 0, 'A', 2, 'J']
// console.log(isStraight(nums)) // false

// let nums = [0, 0, 2, 5, 5]
// console.log(isStraight(nums)) // false

// let nums = [11, 8, 12, 8, 10]
// console.log(isStraight(nums)) // false

let nums = [11, 0, 9, 0, 0]
console.log(isStraight(nums)) // true