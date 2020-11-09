/**
 * leetcode125. 验证回文串
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var i = 0, j = s.length - 1
    while(i < j) {
        // 判断是否是数字或字母
        if (!/[0-9a-zA-Z]/.test(s[i])) {
            i++
            continue
        }
        if (!/[0-9a-zA-Z]/.test(s[j])) {
            j--
            continue
        }
        // console.log(s[i], s[j])
        // 将其转成小写
        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false
        i++
        j--
    }
    return true
}

var arr = 'A man, a plan, a canal: Panama'
console.log(isPalindrome(arr))

var arr = 'race a car'
console.log(isPalindrome(arr))

var arr = 'ab_a'
console.log(isPalindrome(arr))