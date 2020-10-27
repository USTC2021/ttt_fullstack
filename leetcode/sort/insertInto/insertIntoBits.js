var insertBits = function (N, M, i, j) {
    // 将两个整数转换成二进制 此时a，b为字符串
    var a = N.toString(2)
    var b = M.toString(2)
    // console.log(a,','+b)
    // 获取字符串a长度
    var lena = a.length
    var lenb = b.length
    var len = Math.abs(i - j) + 1
    // console.log(lena, lenb)
    // 分割字符串 合并字符串 
    var leftA, rightA, insertA, result
    // console.log(lena - i, lena - j)
    if (lenb < len){
        b = b.padStart(len, '0')
        // console.log(len, b)
    }
    // console.log(b)
    if (lena - i == 0) {
        insertA = a.slice(0, lena - j)
        rightA = a.slice(lena - j)
        result = b.concat(rightA)
    } else if (lena - j == 0) {
        insertA = a.slice(0, lena - i)
        rightA = a.slice(lena - i)
        result = b.concat(rightA)
    } else {
        if (i < j) {
            leftA = a.slice(0, lena - j - 1)
            insertA = a.slice(lena - j, lena - i)
            rightA = a.slice(lena - i)
            // console.log(lena - i, lena - j)
        } else {
            leftA = a.slice(0, lena - i - 1)
            insertA = a.slice(lena - i, lena -j)
            rightA = a.slice(lena - j)
        }
        // 将分割字符串按要求连接
        result = leftA.concat(b).concat(rightA)
        // console.log(result)
        // console.log(leftA, ' ' + insertA, ' ' + rightA)
    }
    if (lena < i || lena <j) {
        // 获取i和j的最大值 最小值
        var maxNum = Math.max(i, j)
        var minNum = Math.min(i, j)
        a = a.padStart(maxNum, '0')
        // console.log(a)
        // console.log(maxNum, minNum)
        insertA = a.slice(0, maxNum - minNum)
        rightA = a.slice(maxNum - minNum)
        // console.log(insertA, ' ' + rightA)
        result = b.concat(rightA)
        // console.log(result, result.length)
    }
    // console.log(result)
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

var N = 126194517, M = 2982082, i = 9, j = 30
console.log(insertBits(N, M, i, j)) // 1526826325