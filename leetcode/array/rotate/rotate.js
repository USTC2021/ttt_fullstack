/**
 * leetcode189. 旋转数组
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // // let nums1 = nums.splice(0, k)
  // // console.log(nums, nums1)
  // // console.log(nums.length)
  // return nums.splice(nums.length - k).concat(nums)


  let n = nums.length
  let _k = k % n
  while(_k-- > 0) {
    nums.unshift(nums.pop())
  }
  return nums


  // const n = nums.length
  // let newArr = new Array(n)
  // for (let i = 0; i < n; i++) {
  //   newArr[(i + k) % n] = nums[i]
  // }
  // for (let i = 0; i < n; i++) {
  //   nums[i] = newArr[i]
  // }
  // return nums
}

let nums = [1, 2, 3, 4, 5, 6, 7], k = 3
console.log(rotate(nums, k)) // [5, 6, 7, 1, 2, 3, 4]

nums = [-1, -100, 3, 99], k = 2
console.log(rotate(nums, k)) // [ 3, 99, -1, -100 ]