/**
 * LeetCode1122. 数组的相对排序
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    // 定义两个数组，一个存入arr2中与arr1匹配的元素，一个arr2存入不存在与arr1中的元素
    var arrA = [], arrB = [], result = []
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) {
            arrA.push(arr1[i])
        } else {
            arrB.push(arr1[i])
        }
    }
    // console.log(arrA, arrB)
    // 将不存在的那个数组进行排序
    arrA.sort(function(a, b) {
        return a - b
    })
    // console.log(arrA)
    var map = new Map()
    for (let ans of arrB) {
        map.set(ans, (map.get(ans) || 0) + 1)
    }
    // console.log(map)
    // map.forEach(function (value, key, map) {
    //     console.log(key, value)
    // })
    for (var i = 0; i < arr2.length; i++) {
        map.forEach(function (value, key, map) {
            // console.log(key, value)
            if (key == arr2[i]) {
                // console.log(key, arr2[i])
                for(var j = 0; j < value; j++) {
                    result.push(key)
                }
            }
        })
    }
    // console.log(result)
    return result.concat(arrA)
}

var arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
var arr2 = [2, 1, 4, 3, 9, 6]
console.log(relativeSortArray(arr1, arr2)) // [2,2,2,1,4,3,3,9,6,7,19]