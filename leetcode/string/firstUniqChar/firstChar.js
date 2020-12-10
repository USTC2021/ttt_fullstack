/**
 * leetcode剑指 Offer 50. 第一个只出现一次的字符
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  for (let value of s) {
    if (s.indexOf(value) === s.lastIndexOf(value))
      return value
  }
  return " "
}

let s = "abaccdeff"
console.log(firstUniqChar(s)) // "b"

// let s = ""
// console.log(firstUniqChar(s)) // ' '

// let s = "aa"
// console.log(firstUniqChar(s)) // " "