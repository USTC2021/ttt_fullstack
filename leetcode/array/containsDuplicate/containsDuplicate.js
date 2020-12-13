/**
 * leetcode217. 存在重复元素
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // // 数组排序
  // nums.sort((a, b) => a - b)
  // // 遍历数组，判断是否有重复元素
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === nums[i + 1]) 
  //     return true
  // }
  // return false

  // 方法2
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) 
  //     return true
  // }
  // return false

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums.lastIndexOf(nums[i]) !== i) 
  //     return true
  // }
  // return false

  // 方法3
  // let set = new Set()
  // for (let i = 0; i < nums.length; i++) {
  //   if (set.has(nums[i]))
  //     return true
  //   set.add(nums[i])
  // }
  // return false

  // return new Set(nums).size !== nums.length

  // 方法四
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]))
      return true
    map.set(nums[i], 1)
  }
  return false
}

let nums = [1, 2, 3, 1]
console.log(containsDuplicate(nums)) // true

// let nums = []
// console.log(containsDuplicate(nums)) // false