/**
 * LeetCode剑指 Offer 58 - I. 翻转单词顺序
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // // 去除首尾空格
    // var arr = s.replace(/^\s+|\s+$/g, '')
    // // 字符串以空格分割，并存储在数组中
    // var result = arr.split(/[ ]+/)
    // // console.log(result)
    // var resultArr = []
    // // var j = 0
    // // 翻转单词，但不翻转单词中的字符
    // // for(var i = result.length - 1; i >= 0; i--) {
    // //     // console.log(result[i])
    // //     resultArr[j++] = result[i]
    // // }
    // resultArr = result.reverse()
    // // console.log(resultArr)
    // // 数组转换成字符串
    // return resultArr.join(' ')

    // return s.replace(/^\s+|\s+$/g, '').split(/[ ]+/).reverse().join(' ')

    // console.log(s.trim().split(/\s+/))
    return s.trim().split(/\s+/).reverse().join(' ')
}

var s = "the sky is blue"
console.log(reverseWords(s))

var s = "  hello world!"
console.log(reverseWords(s))

var s = "a good  example"
console.log(reverseWords(s))

var s = "a, yqo! qjktum ym. .fumuhau"
console.log(reverseWords(s))