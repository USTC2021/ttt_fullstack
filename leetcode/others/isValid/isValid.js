/**
 * leetcode20. 有效的括号
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0)
    return false
  while (s.length) {
    let temp = s 
    // console.log('1:', temp, s)
    s = s.replace('()', '')
    // console.log('2:', temp, s)
    s = s.replace('[]', '')
    // console.log('3:', temp, s)
    s = s.replace('{}', '')
    // console.log('4:', temp, s)
    if (s === temp)
      return false
  }
  return true
}

let s = '()[]{}'
console.log(isValid(s))
// 1: ()[]{} ()[]{}
// 2: ()[]{} []{}
// 3: ()[]{} {}
// 4: ()[]{}
// true

// let s = '{[]}'
// console.log(isValid(s))
// 1: {[]} {[]}
// 2: {[]} {[]}
// 3: {[]} {}
// 4: {[]}
// true