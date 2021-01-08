// // 字符串反转
// const str = 'dabai'
// // iabad
// const res = str.split('').reverse().join('')
// console.log(res)

let str = 'yessey'
function isPalindrome(str) {
  // const res = str.split('').reverse().join('')
  // return res === str

  let mid = parseInt(str.length / 2)
  for(let i = 0; i < mid; i++){
    if(str[i] !== str[str.length - 1 - i]){
      return false
    }
  }
  return true
}
console.log(isPalindrome(str))

// 给定一个非空字符串s，最多删除一个字符串，判断是否能成为回文字符串
// 'aba'
// 'abca' 

// var validPalindrome = function (str) {
//   let flag = isPalindrome(str)
//   if (!flag) {
//     let i = 0, len = str.length
//     while (i < len && !flag) {
//       let arrStr = str.split('')
//       arrStr.splice(i, 1)
//       i++
//       let newStr = arrStr.join('')
//       flag = isPalindrome(newStr)
//     }
//   }
//   return flag
// }


function validPalindrome(str) {
  let i = 0, j = str.length - 1
  while (i < j) {
    if (str[i] != str[j]) {
      return isPalindrome(str, i + 1, j) || isPalindrome(str, i, j - 1)
    }
    i++
    j--
  }
  return true
}