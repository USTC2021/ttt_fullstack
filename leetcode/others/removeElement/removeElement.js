/**
 * leetcode27. 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // // 双指针
  // let j = 0 
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== val) {
  //     nums[j] = nums[i]
  //     j++
  //   }
  // }
  // return j

  // 交换移除
  let ans = nums.length
  for (let i = 0; i < ans;) {
    if (nums[i] === val) {
      nums[i] = nums[ans - 1]
      ans--
    } else {
      i++
    }
  } 
  return ans
}

let nums = [3, 2, 2, 3], val = 3
console.log(removeElement(nums, val))