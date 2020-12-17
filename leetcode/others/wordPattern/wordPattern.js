/**
 * leetcode290. 单词规律
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  s = s.split(" ")
  // console.log(s)
  if (pattern.length != s.length)
    return false
  for (let i = 0; i < pattern.length; i++) {
    if (pattern.indexOf(pattern[i]) != s.indexOf(s[i]))
      return false
  }
  return true
}

let pattern = 'abba', s = 'dog cat cat dog'
console.log(wordPattern(pattern, s))