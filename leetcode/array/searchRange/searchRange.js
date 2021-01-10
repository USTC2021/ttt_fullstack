/**
 * leetcode34. 在排序数组中查找元素的第一个和最后一个位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */  
var searchRange = function(nums, target) {
  // let index = nums.indexOf(target), lastIndex = nums.lastIndexOf(target), arr = []
  // // console.log(index, lastIndex)
  // arr.push(index)
  // arr.push(lastIndex)
  // return arr

  // // 暴力法
  // if (nums.length === 0) 
  //   return [-1, -1]
  // let i = 0, j = nums.length - 1, arr = []
  // for (; i <= j; i++) {
  //   if (nums[i] === target) {
  //     arr.push(i)
  //     break
  //   }
  // }
  // if (i === j + 1)
  //   arr.push(-1)
  // for (; j >= 0; j--) {
  //   if (nums[j] === target) {
  //     arr.push(j)
  //     break
  //   }
  // }
  // // console.log(i, j)
  // if (arr.length === 1) {
  //   arr.push(-1)
  // }
  // return arr

  return [nums.indexOf(target), nums.lastIndexOf(target)] 

  // // 二分法 超时
  // let low = 0; high = nums.length - 1
  // while (low <= high) {
  //   let mid = (low + high) >> 1
  //   if (nums[mid] >=  target) {
  //     high = mid - 1
  //   } 
  //   if (nums[mid] < target) {
  //     left = mid + 1
  //   }
  // }
  // if (nums[left] !== target) 
  //   return [-1, -1]
  // const res = [left, left]
  // while (nums[++left] === target)
  //   res[1] = left
  // return res
}

let nums = [5, 7, 7, 8, 8, 10], target = 8
console.log(searchRange(nums, target))

target = 6
console.log(searchRange(nums, target))

nums = [], target = 0
console.log(searchRange(nums, target))

nums = [1], target = 1
console.log(searchRange(nums, target))