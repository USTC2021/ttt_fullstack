/**
 * LeetCode1387. 将整数按权重排序
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    var map = new Map(), result = []
    // 获取每一个元素及其权重
    for (var i = lo; i <= hi; i++) {
        // console.log(i, count)
        map.set(i, power(i))
    }
    // console.log(map)
    // 对其进行排序
    map = new Map([...map].sort((a, b) => a[1] - b[1]))
    // console.log(map)
    // 将排序后的整数存入数组中
    map.forEach((value, key) => result.push(key))
    // console.log(result)
    return result[k - 1]
}

// 计算权重
function power(num) {
    var count = 0 
    while (num != 1) {
        if (num % 2 == 0) {
            num /= 2
        } else {
            num = num * 3 + 1
        } 
        count++
    }
    return count
}

var lo = 12, hi = 15, k = 2
console.log(getKth(lo, hi, k)) // 13

var lo = 1, hi = 1, k = 1
console.log(getKth(lo, hi, k)) // 1

var lo = 7, hi = 11, k = 4
console.log(getKth(lo, hi, k)) // 7

var lo = 10, hi = 20, k = 5
console.log(getKth(lo, hi, k)) // 13