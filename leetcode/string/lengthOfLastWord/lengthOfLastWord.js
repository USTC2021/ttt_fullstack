/**
 * leetcode58. 最后一个单词的长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let end = s.length - 1
  while (end >= 0 && s[end] === " ") 
    end--
  let start = end
  while (start >= 0 && s[start] !== " ") 
    start--
  return end - start
}

let s = 'hello world'
console.log(lengthOfLastWord(s)) // 5

// let s = 'a '
// console.log(lengthOfLastWord(s)) // 1

// let s = '    '
// console.log(lengthOfLastWord(s)) // 0