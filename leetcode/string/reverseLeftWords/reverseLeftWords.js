/**
 * leetcode剑指 Offer 58 - II. 左旋转字符串
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  // let lefts = s.slice(0, n)
  // let rights = s.slice(n, s.length)
  // // console.log(lefts, rights)
  // return rights.concat(lefts)

  return s.slice(n) + s.slice(0, n)

  // let ss = ''
  // for (let i = n; i < s.length; i++) {
  //   ss += s[i]
  // }
  // for (let i = 0; i < n; i++) {
  //   ss += s[i]
  // }
  // return ss
}

let s = 'lrloseumgh', k = 6
console.log(reverseLeftWords(s, k)) // "umghlrlose"