/**
 * leetcode28. 实现 strStr()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // 遍历数组
  let len = needle.length
  // console.log(haystack.length - len, len)
  for (let i = 0; i <= haystack.length - len; i++) {
    // 截取字符串
    let tmp = haystack.slice(i, i + len)
    // console.log(i, len, tmp, haystack)
    if (tmp === needle)
      return i
  }
  return -1

  // // 暴力法
  // let len = needle.length
  // for (let i = 0; i <= haystack.length - len; i++) {
  //   let k = 0
  //   for (let j = i; j < i + len; j++) {
  //     if (haystack[j] === needle[k]) {
  //       k++
  //     } else {
  //       break
  //     }
  //   }
  //   if (k === len)
  //     return i
  // }
  // return -1

  // // 库函数
  // return haystack.indexOf(needle)
}

let haystack = 'hello', needle = 'll'
console.log(strStr(haystack, needle))

haystack = 'aaaaaaaa', needle = 'bba'
console.log(strStr(haystack, needle))