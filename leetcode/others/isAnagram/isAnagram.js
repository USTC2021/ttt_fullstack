/**
 * leetcode242. 有效的字母异位词
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // //  暴力法 + 库函数
  // if (s.length !== t.length)
  //   return false
  // let arrs = s.split('')
  // let arrt = t.split('')
  // // console.log(arrs, arrt)
  // for (let i = 0; i < arrs.length; i++) {
  //   let index = arrt.indexOf(arrs[i])
  //   if (index === -1)
  //     return false
  //   delete arrt[index]
  //   // console.log(index, arrt)
  // }
  // return true

  // // 排序  按字符的先后顺序对字符串进行排序
  // // console.log([...s].sort().join(''), [...t].sort().join(''))
  // return s.length === t.length && [...s].sort().join('') === [...t].sort().join('')

  // 方法三 数组哈希
  if (s.length !== t.length)
    return false
  // 开辟26个字母的空间数组，并赋初值为0
  let arrs = new Array(26).fill(0), arrt = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    let indexs = s[i].charCodeAt() - 97, indext = t[i].charCodeAt() - 97
    // console.log(indexs, indext)
    arrs[indexs]++
    arrt[indext]++
  }
  // console.log(arrs, arrt)
  // 将数组转成字符串
  // let strs = arrs.join(''), strt = arrt.join('')
  // // console.log(strs, strt)
  // return strs === strt
  return arrs.join('') === arrt.join('')

  // // Array.from()
  // // console.log(Array.from(s).sort().join(''), Array.from(t).sort().join(''))
  // return Array.from(s).sort().join('') === Array.from(t).sort().join('')

  // // 正则
  // return (s.match(/\w/g) || []).sort().join('') === (t.match(/\w/g) || []).sort().join('')
}

// let s = 'anagram', t = 'nagaram'
// console.log(isAnagram(s, t)) // true

// let s = 'rat', t = 'car'
// console.log(isAnagram(s, t)) // false

let s = 'aacc', t = 'ccac'
console.log(isAnagram(s, t)) // false