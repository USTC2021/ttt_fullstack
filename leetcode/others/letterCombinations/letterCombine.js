/**
 * leetcode17. 电话号码的字母组合
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  // 三重循环
  if (digits.length === 0) return []
  const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let res = ['']
  for (let num of digits) {
    let result = []
    let str = map[num] // 找到数字对应的字符
    for (let t of res) { // 生成字符串列表
      // console.log(t, res)
      for (let s of str) { // 遍历当前数字可能对应的字符
        // console.log('s：', s, str) 
        result.push(t + s) // 拼接字符串
        // console.log(result)
      }
    }
    res = result
  }
  return res
}

let digits = '23'
console.log(letterCombinations(digits))