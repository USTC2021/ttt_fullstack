// 三数求和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
// 请你找出所有满足条件且不重复的三元组。

let nums = [-1, 0, 1, 2, -1, -4]
// [[-1, 0, 1], [-1, -1, -2]]

// nums = nums.sort((a, b) => {
//   return a - b 
// })

// console.log(nums)

const threeSum = function(nums) {
  let res = []
  nums = nums.sort((a, b) => {
    return a - b 
  })
  const len = nums.length
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1
    let k = len - 1

    if (nums[i] > 0) {
      break
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++
        // 处理左指针重复的情况
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--
        // 处理右指针重复的情况
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      } else {
        res.push([nums[i], nums[j], nums[k]])
        j++
        k--
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      }
    }
  }
  return res
}