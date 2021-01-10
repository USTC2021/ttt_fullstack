/**
 * leetcode34. 在排序数组中查找元素的第一个和最后一个位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 二分法
  function search(nums, target, flag) {
    let len = nums.length, low = 0, high = len - 1
    while (low <= high) {
      let mid = low + ((high - low) >> 1)
      if (nums[mid] > target) {
        high = mid - 1
      } else if (nums[mid] < target) {
        low = mid + 1
      } else {
        if (flag) {
          if (mid === 0 || nums[mid - 1] !== target) return mid
          high = mid - 1
        } else {
          if (mid === len - 1 || nums[mid + 1] !== target) return mid
          low = mid + 1
        }

      }
    }
    return -1
  }
  return [search(nums, target, true), search(nums, target)]
}

let nums = [5, 7, 7, 8, 8, 10], target = 8
console.log(searchRange(nums, target))

target = 6
console.log(searchRange(nums, target))

nums = [], target = 0
console.log(searchRange(nums, target))

nums = [1], target = 1
console.log(searchRange(nums, target))