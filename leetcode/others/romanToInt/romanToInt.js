/**
 * leetcode13. 罗马数字转整数
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }
  let result = 0
  for (let i = 0; i < s.length;) {
    // substring() 方法用于提取字符串中介于两个指定下标之间的字符
    if ((i + 1 < s.length) && map[s.substring(i, i + 2)]) {
      result += map[s.substring(i, i + 2)]
      i += 2
    } else {
      result += map[s.substring(i, i + 1)]
      i++
    }
  }
  return result
}

let s = 'LVIII'
console.log(romanToInt(s))

s = 'MCMXCIV'
console.log(romanToInt(s))