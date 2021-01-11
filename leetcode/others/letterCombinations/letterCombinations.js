/**
 * leetcode17. 电话号码的字母组合
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  // 回溯递归 dfs
  if (digits.length === 0) return []
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }
  const res = []

  const dfs = (curStr, i) => { // curStr 当前字符串，i 指针
    if (i > digits.length - 1) {
      res.push(curStr)
      return 
    }
    let letters = map[digits[i]] // 当前数字对应的字母
    // console.log(letters)
    for (let item of letters) { // 一个字母对应着一个递归分支
      console.log(item, res)
      dfs(curStr + item, i + 1) // 生成新的字符串，i向右指，递归
    }
  }

  dfs('', 0) // 递归入口，指针指向0
  return res
}

let digits = '23'
console.log(letterCombinations(digits))

// 过程
// a []
// d []
// e [ 'ad' ]
// f [ 'ad', 'ae' ]
// b [ 'ad', 'ae', 'af' ]
// d [ 'ad', 'ae', 'af' ]
// e [ 'ad', 'ae', 'af', 'bd' ]
// f [ 'ad', 'ae', 'af', 'bd', 'be' ]
// c [ 'ad', 'ae', 'af', 'bd', 'be', 'bf' ]
// d [ 'ad', 'ae', 'af', 'bd', 'be', 'bf' ]
// e [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd' ]
// f [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce' ]
// [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]