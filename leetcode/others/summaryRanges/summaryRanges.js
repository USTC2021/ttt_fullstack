/**
 * leetcode228. 汇总区间
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  // // 暴力法
  // let res = []
  // for (let i = 0; i < nums.length; i++) {
  //   let j = i
  //   for (; j < nums.length; j++) {
  //     if (nums[j + 1] !== (nums[j] + 1)) {
  //       let tmp = nums.slice(i, j + 1)
  //       // console.log('tmp', tmp)
  //       if (tmp.length !== 1) {
  //         res.push(String(`${tmp[0]}->${tmp[tmp.length - 1]}`))
  //       } else {
  //         res.push(String(tmp[0]))
  //       }
  //       break
  //     }
  //   }
  //   i = j
  // }
  // // console.log(res)
  // return res

  if (nums.length === 0) return []
  let start = nums[0]
  let res = []
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] !== nums[i] - 1) {
      let str = start !== nums[i - 1] ? start + '->' + nums[i - 1] : start + ''
      res.push(str)
      start = nums[i]
    }
  }
  return res
} 

let nums = [0, 1, 2, 4, 5, 7]
console.log(summaryRanges(nums))

nums = [0, 2, 3, 4, 6, 8, 9]
console.log(summaryRanges(nums))