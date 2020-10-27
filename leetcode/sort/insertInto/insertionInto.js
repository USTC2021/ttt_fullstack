/**
 * leetcode面试题05.01. 插入
 * @param {number} M
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */

var insertBits = function (N, M, i, j) {
    // 将整数转换成二进制(字符串)，再将其转换成数组并将其翻转
    // console.log(N.toString(2), M.toString(2))
    var a = N.toString(2).split('').reverse()
    var b = M.toString(2).split('').reverse()
    // console.log(a, b)

    // 在指定比特位插入数组
    for (var k = i; k <= j; k++){
        a[k] = (b[k - i] != undefined) ? b[k - i] : '0'
    }
    // console.log(a)
    // 将插入后的数组进行翻转，然后将其转成字符串，并去除其逗号
    a = a.reverse().toString().replace(/,/g,"")
    // console.log(a)
    // 将二进制字符串转成十进制整数
    return parseInt(a, 2)
}

var N = 1024, M = 19, i = 2, j = 6
console.log(insertBits(N, M, i, j)) // 1100

var N = 0, M = 31, i = 0, j = 4
console.log(insertBits(N, M, i, j)) // 31

var N = 1143207437, M = 1017033, i = 11, j = 31
console.log(insertBits(N, M, i, j)) // 2082885133

var N = 2032243561, M = 10, i = 24, j = 29
console.log(insertBits(N, M, i, j)) // 1243714409

var N = 126194517, M = 2982082, i = 9, j = 30
console.log(insertBits(N, M, i, j)) // 1526826325