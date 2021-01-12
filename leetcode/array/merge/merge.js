/**
 * leetcode88. 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // nums1 = nums1.slice(0, m)
  // let nums = nums1.concat(nums2)
  // // console.log(nums)
  // return nums.sort((a, b) => a - b)

  // return nums1.slice(0, m).concat(nums2).sort((a, b) => a - b)

  // // 暴力法
  // for (let i = m; i < nums1.length; i++) {
  //   nums1[i] = nums2[i - m]
  // }
  // // console.log(nums1)
  // return nums1.sort((a, b) => a - b)

  // 双指针
  let i = m - 1; j = n - 1, k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i]
      k--
      i--
    } else {
      nums1[k] = nums2[j]
      k--
      j--
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j]
    k--
    j--
  }
  return nums1

  // // 合并后排序
  // nums1.splice(m, n, ...nums2)
  // return nums1.sort((a, b) => a - b)
}

let nums1 = [1, 2, 3, 0, 0, 0], m = 3
let nums2 = [2, 5, 6], n = 3
console.log(merge(nums1, m, nums2, n))