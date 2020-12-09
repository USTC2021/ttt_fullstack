/**
 * leetcode58. 最后一个单词的长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // let arr = s.match(/[a-zA-z]+/g)
  // // console.log(arr)
  // return arr === null ? 0 : arr[arr.length - 1].length

  // if (s == ' ') {
  //   return 0
  // } else {
  //   let words = s.split(' ').filter((item) => item != '')
  //   // console.log(words)
  //   return words.length == 0 ? 0 : words[words.length - 1].length 
  // }

  let len = 0
  for (let i = s.length; i--; i > 0) {
    // console.log(i, s[i])
    if (s[i] !== " ") {
      len++
    } else if (len !== 0) {
      break
    }
  }
  return len
}

let s = 'hello world'
console.log(lengthOfLastWord(s)) // 5

// let s = 'a '
// console.log(lengthOfLastWord(s)) // 1

// let s = '    '
// console.log(lengthOfLastWord(s)) // 0