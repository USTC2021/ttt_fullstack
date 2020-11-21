/**
 * leetcode剑指 Offer 67. 把字符串转换成整数
 * @param {string} str
 * @return {number}
 */

var strToInt = function(str) {
    // let max = Math.pow(2, 31) - 1
    // let min = Math.pow(-2, 31)
    // // console.log(max, min)
    // // 去除空格
    // str = str.trim()
    // // console.log(str[0])
    // // if (isNaN(str[0])) 
    // if (str[0] == '-' || str[0] == '+' || (Math.abs(str[0]) >= 0 && Math.abs(str[0]) <= 9)) {
    //     if (str.length == 1 && (str[0] == '+' || str[0] == '-'))
    //         return 0
    //     if (str.length == 1 && (Math.abs(str[0]) >= 0 && Math.abs(str[0]) <= 9))
    //         return str
    //     if (str[1] == '+' || str[1] == '-') {
    //         return 0
    //     } else {
    //         for (var i = 1; i < str.length; i++) {
    //             // console.log(str[i])
    //             if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z') || str[i] == " " || str[i] == '+' || str[i] == '-')
    //                 break
    //                 // console.log(str[i], isNaN(str[i]))
    //         }
    //     }
    // } else {
    //     return 0
    // }
    // // console.log(i, str)
    // let arr = 0
    // if (str[0] == '+') {
    //     arr = str.slice(1, i)
    // } else {
    //     arr = str.slice(0, i)
    // }
    // // console.log(arr.length, arr[0])
    // if (arr.length == 1 && (arr[0] == '+' || arr[0] == '-'))
    //     return 0
    // // if (arr[arr.length - 1] == '+' || arr[arr.length - 1] == '-') {
    // //     let j = arr.length - 1
    // //     while (j >= 0) {
    // //         if (arr[arr.length - 1] !== '+' || arr[arr.length - 1] !== '-') 
    // //             break
    // //         j--
    // //     }
    // //     // console.log(j)
    // //     arr = arr.slice(0, j)
    // // }
    // if (arr > max) 
    //     arr = max
    // if (arr < min)
    //     arr = min
    // return arr

    // let res = str.match(/^\s*[+-]?\d+/)
    // // console.log(res)
    // if (!res)
    //     return 0
    // res = str.match(/^\s*[+-]?\d+/)[0].trim() // 隐式类型转换
    // // console.log(res)
    // if (res >= Math.pow(2, 31)) {
    //     return Math.pow(2, 31) - 1
    // } else if (res <= Math.pow(-2, 31)) {
    //     return Math.pow(-2, 31)
    // } else {
    //     return res
    // }


    const num = +(str.trim().match(/^[+-]?\d+/) || 0)
    // console.log(num)
    if (num >= Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1
    } else if (num <= Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
    } else {
        return num
    } 
}

var str = "   42fhhf"
console.log(strToInt(str)) // 42

var str = "   -42"
console.log(strToInt(str)) // -42

var str = "4193 with words"
console.log(strToInt(str)) // 4193

var str = "words and 987"
console.log(strToInt(str)) // 0

var str = "-91283472332"
console.log(strToInt(str)) // -2147483648

var str = "91283472332"
console.log(strToInt(str)) // 2147483647

var str = "-"
console.log(strToInt(str)) // 0

var str = "1"
console.log(strToInt(str)) // 1

var str = "+++---123jdhf"
console.log(strToInt(str)) // 0

var str = "+12 3jdhf"
console.log(strToInt(str)) // 12

var str = "+-2"
console.log(strToInt(str)) // 0

var str = "-abc"
console.log(strToInt(str)) // 0

var str = "1a"
console.log(strToInt(str)) // 1

var str = "-5-"
console.log(strToInt(str)) // -5

var str = "+13-8"
console.log(strToInt(str)) // 13