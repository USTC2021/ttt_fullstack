var insertBits = function (N, M, i, j) {
    // 将两个整数转换成二进制 此时a，b为字符串
    var a = N.toString(2)
    var b = M.toString(2)
    console.log(a,','+b)
    // 获取字符串a长度
    var lena = a.length
    var lenb = b.length
    var len = Math.abs(i - j)
    console.log(lena, lenb)
    // 分割字符串 合并字符串 
    var leftA, rightA, insertA, result, temp = 0
    console.log(lena - i, lena - j)
    if (lenb < len){
        b = b.padStart(len, '0')
        console.log(len, b)
    }
    if (lenb > len) {
        temp = lenb - len
    }
    console.log(b)
    if (lena - i == 0) {
        insertA = a.slice(0, lena - j + temp)
        rightA = a.slice(lena - j + temp)
        result = b.concat(rightA)
    } else if (lena - j == 0) {
        insertA = a.slice(0, lena - i + temp)
        rightA = a.slice(lena - i + temp)
        result = b.concat(rightA)
    } else {
        if (i < j) {
            leftA = a.slice(0, lena - j - temp)
            insertA = a.slice(lena - j - temp, lena - i)
            rightA = a.slice(lena - i)
        } else {
            leftA = a.slice(0, lena - i - temp)
            insertA = a.slice(lena - i - temp, lena -j)
            rightA = a.slice(lena - j)
        }
        // 将分割字符串按要求连接
        result = leftA.concat(b).concat(rightA)
        // console.log(result)
        console.log(leftA, ' ' + insertA, ' ' + rightA)
    }
    // 插入区的字符串异或计算
    (parseInt(a) ) ^ (parseInt(b) ) 
    // 将二进制转成十进制 数字
    console.log(result)
    return parseInt(result, 2)
}

var N = 1024, M = 19, i = 2, j = 6
console.log(insertBits(N, M, i, j)) // 1100

var N = 0, M = 31, i = 0, j = 4
console.log(insertBits(N, M, i, j)) // 31

var N = 1143207437, M = 1017033, i = 11, j = 31
console.log(insertBits(N, M, i, j)) // 2082885133

var N = 2032243561, M = 10, i = 24, j = 29
console.log(insertBits(N, M, i, j)) // 1243714409