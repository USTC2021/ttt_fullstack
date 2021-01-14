/**
 * leetcode169. 多数元素
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 库函数
  // // 排序
  // nums.sort((a, b) => a - b)
  // // console.log(nums)
  // let len = nums.length, index = 0, maxCount = 0
  // for (let i = 0; i < len; i++) {
  //   let firstIndex = nums.indexOf(nums[i])
  //   let lastIndex = nums.lastIndexOf(nums[i])
  //   let count = lastIndex - firstIndex + 1
  //   maxCount = Math.max(count, maxCount)
  //   if (maxCount === count) 
  //     index = i
  //   i = lastIndex
  //   // console.log(index, maxCount)
  // }
  // // console.log(nums[index])
  // return nums[index]


  // // map
  // let map = new Map(), len = nums.length / 2
  // nums.forEach(item => {
  //   map.set(item, (map.get(item) || 0) + 1)
  // })
  // for (let item of map) {
  //   // console.log(item)
  //   if (item[1] > len)
  //     return item[0]
  // }


  // nums.sort((a, b) => a - b)
  // return nums[Math.floor(nums.length / 2)]

  let count = 1, ans = nums[0]
  for (let i = 1; i < nums.length; ++i) {
    if (count === 0) {
      ans = nums[i]
      count = 1
    } else if (nums[i] === ans) {
      ++count
    } else {
      --count
    }
  }
  return ans
}

let nums = [6, 5, 5]
console.log(majorityElement(nums))

nums = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(nums))