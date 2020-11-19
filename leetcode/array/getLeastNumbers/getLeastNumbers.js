/**
 * leetcode剑指 Offer 40. 最小的k个数
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

var getLeastNumbers = function(arr, k) {
    arr.sort((a, b) => a - b)
    return arr.splice(0, k)

    // var result = []
    // arr.sort((a, b) => a - b)
    // for (var i = 0; i < k; i++)
    //     result[i] = arr[i]
    // return result
}

var arr = [3, 2, 1], k = 2
console.log(getLeastNumbers(arr, k)) // [1, 2]

var arr = [0, 1, 2, 1], k = 1
console.log(getLeastNumbers(arr, k)) // [0]