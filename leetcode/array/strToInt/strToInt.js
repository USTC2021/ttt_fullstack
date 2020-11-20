/**
 * leetcode剑指 Offer 67. 把字符串转换成整数
 * @param {string} str
 * @return {number}
 */

var strToInt = function(str) {
    let max = Math.pow(2, 31) - 1
    let min = Math.pow(-2, 31)
    // console.log(max, min)
    // 去除左边空格
    str = str.trimLeft()
    // console.log(str)
    if (isNaN(str[0])) 
        return 0
    console.log(str[1])
    
    console.log(num)
}

var str = "   42fhhf"
console.log(strToInt(str))