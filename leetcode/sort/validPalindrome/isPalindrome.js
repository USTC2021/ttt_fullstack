/**
 * leetcode125. 验证回文串
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 将字符串中非数字和字母进行替换
    // s = s.replace(/[\W|_]/g, '')
    // // s = s.replace(/[^0-9a-zA-Z]/g, '')
    // // console.log(s)
    // // 将字符串转成小写
    // s = s.toLowerCase()
    // // console.log(s)
    // // 将字符串转成数组
    // result = s.split('')
    // // console.log(result)
    // // 将数组翻转
    // result = result.reverse()
    // // console.log(result)
    // // 将数组转换成字符串
    // result = result.join('')
    // // console.log(result)
    // if (s === result) return true
    // return false
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    return s === s.split('').reverse().join('')
}

var arr = 'A man, a plan, a canal: Panama'
console.log(isPalindrome(arr))

var arr = 'race a car'
console.log(isPalindrome(arr))

var arr = 'ab_a'
console.log(isPalindrome(arr))