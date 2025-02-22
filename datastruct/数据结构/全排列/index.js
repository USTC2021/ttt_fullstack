// 全排列 穷举
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
// 示例:
// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

var permute = function(nums) {
  const len = nums.length
  const curr = []
  const res = []
  const visited = {}
  function dfs(nth) {
    if (nth === len) {
      res.push(curr.slice())
      return
    }
    // 检查手中的数字有哪些
    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        curr.push(nums[i])
        visited[nums[i]] = 1 // 打个标识
        dfs(nth + 1)
        // nums[i] 让出当前坑位
        curr.pop()
        visited[nums[i]] = 0
      }
    }
  }
  dfs(0)
  return res
}

let nums = [1, 2, 3]
console.log(permute(nums))