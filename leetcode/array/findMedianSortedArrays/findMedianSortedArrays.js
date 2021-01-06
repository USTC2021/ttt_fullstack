/**
 * leetcode4. 寻找两个正序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // let nums = nums1.concat(nums2).sort((a, b) => a - b), len = nums.length
  // // console.log(nums)
  // if (len % 2 === 1) {
  //   // console.log(Math.floor(nums.length / 2))
  //   return nums[Math.floor(len / 2)]
  // } else {
  //   return (nums[len / 2] + nums[len / 2 - 1]) / 2
  // }

  let nums = nums1.concat(nums2).sort((a, b) => a - b), len = nums.length
  if (len === 1) return nums[0]
  const index = parseInt(len / 2)
  if (len % 2) return nums[index]
  else return (nums[index - 1] + nums[index]) / 2
}

let nums1 = [1, 3], nums2 = [2]
console.log(findMedianSortedArrays(nums1, nums2))

nums1 = [1, 2], nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2))

nums1 = [0, 0], nums2 = [0, 0]
console.log(findMedianSortedArrays(nums1, nums2))

nums1 = [], nums2 = [1]
console.log(findMedianSortedArrays(nums1, nums2))