/**
 * leetcode35. 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // // 暴力法
  // if (nums[0] >= target)
  //   return 0
  // if (nums[nums.length - 1] === target)
  //   return nums.length - 1
  // if (nums[nums.length - 1] < target)
  //   return nums.length
  // let index = nums.indexOf(target)
  // // console.log(index)
  // if (index === -1) {
  //   for (let i = nums.length - 1; i >= 0; i--) {
  //     if (nums[i] >= target) {
  //       nums[i + 1] = nums[i]
  //       // console.log(i, nums)
  //     } else {
  //       nums[i + 1] = target
  //       return i + 1
  //     }
  //     console.log(i)
  //   }
  // }
  // return index


  // // 二分查找
  // let left = 0; right = nums.length - 1, index = nums.length
  // while (left <= right) {
  //   let mid = ((right - left) >> 1) + left
  //   // console.log(right, left, (right - left) >> 1, mid)
  //   if (target <= nums[mid]) {
  //     index = mid
  //     right = mid - 1
  //   } else {
  //     left = mid + 1
  //   }
  // }
  // return index

  // let left = 0, right = nums.length - 1
  // while (left <= right) {
  //   let mid = (left + right) >>> 1
  //   if (nums[mid] === target) {
  //     return mid
  //   } else if(nums[mid] < target) {
  //     left = mid + 1
  //   } else {
  //     right = mid - 1
  //   }
  //   // console.log(left, right, mid)
  // }
  // return left


  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i])
      return i
  }
  return nums.length
}

let nums = [1, 3, 5, 6], target = 5
console.log(searchInsert(nums, target))

nums = [1, 3, 5, 6], target = 2
console.log(searchInsert(nums, target))