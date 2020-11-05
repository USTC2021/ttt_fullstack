/**
 * LeetCode剑指 Offer 44. 数字序列中某一位的数字
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    // if (n < 0) return 0
    if (n >= 0 && n <= 9) {
        return n
    } else {
        var base = 1 // 位数
        var num = 9
        var temp = 0
        // console.log(base, num, temp)
        // 计算出第n位存在于几位数之中
        while ((temp + base * num) < n) {
            temp += base * num 
            base++
            num *= 10
        }
        // console.log(base, num, temp)
        // n所在位数的剩余数字
        // var rest = n - temp
        // console.log(rest)
        // n所在的数字
        // var locatedNum = Math.floor((n - temp) / base)
        var locatedRest = (n - temp) % base
        // console.log(locatedNum, locatedRest)
        var nums = Math.pow(10, base - 1) + Math.floor((n - temp) / base) - 1
        // console.log(nums)
        // 寻找第n位数字
        if (locatedRest != 0) {
            nums++
            // 将数字转换成数组
            localNum = nums.toString().split("")
            // console.log(localNum)
            return localNum[locatedRest - 1]
        } else {
            // console.log(locatedNum)
            localNum = nums.toString().split("")
            // console.log(localNum.length)
            return localNum[localNum.length - 1]
        }
    }
}

var n = 2889
console.log(findNthDigit(n))

var n = 3
console.log(findNthDigit(n))

var n = 11
console.log(findNthDigit(n))

var n = 2894
console.log(findNthDigit(n))

var n = 10
console.log(findNthDigit(n))