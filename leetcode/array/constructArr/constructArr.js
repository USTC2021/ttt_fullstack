/**
 * LeetCode剑指 Offer 66. 构建乘积数组
 * @param {number[]} a
 * @return {number[]}
 */

var constructArr = function(a) {
    var result = [], sum = 0, temp = []
    // 判断数组中是否存在0
    if (a.indexOf(0) == -1) {
        sum = product(a)
        // console.log(sum)
        a.forEach(item => result.push(sum / item)) 
    } else {
        temp = a.filter(item => {
            return item > 0
        })
        // console.log(temp, temp.length, a.length - 1)
        // 判断是否存在多个0
        if (temp.length == a.length - 1) {
            sum = product(temp)
            a.forEach(item => {
                // console.log(item)
                result.push(item == 0 ? sum : 0)
            })
        } else {
            a.forEach(item => result.push(0))
        }
    }
    return result
}

function product (a) {
    return a.reduce(function (prev, cur) {
        return prev * cur
    }, 1)
}

var arr = [1, 2, 3, 4, 5]
console.log(constructArr(arr))

var arr = [1, 2, 0, 4, 5]
console.log(constructArr(arr))

var arr = [1, 2, 0, 4, 0]
console.log(constructArr(arr))