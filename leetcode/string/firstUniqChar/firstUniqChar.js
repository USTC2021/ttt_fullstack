/**
 * leetcode剑指 Offer 50. 第一个只出现一次的字符
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  if (s.length === 0)
    return ' '
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1 )
  }
  // console.log(map)
  for (let key of map) {
    // console.log('key:', key)
    if (key[1] === 1)
      return key[0]
  }
  return " "
}

// let s = "abaccdeff"
// console.log(firstUniqChar(s)) // "b"

// let s = ""
// console.log(firstUniqChar(s)) // ' '

let s = "aa"
console.log(firstUniqChar(s)) // " "