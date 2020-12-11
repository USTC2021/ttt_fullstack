/**
 * leetcode剑指 Offer 05. 替换空格
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  // if (s.length === 0)
  //   return ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') 
      s = s.replace(s[i], '%20')
  }
  // console.log(s)
  return s
}

// let s = 'We are happy.'
// console.log(replaceSpace(s)) // "We%20are%20happy."

let s = ''
console.log(replaceSpace(s)) // ''