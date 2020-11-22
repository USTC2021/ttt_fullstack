/**
 * leetcode1243 数组变换
 * @param {number[]} arr
 * @return {number[]}
 */
var transformArray = function (arr) {
    let res = arr.slice(0)
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) 
            res[i]++
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) 
            res[i]--
    }
    // console.log(arr, res)
    // console.log(res.join(''), arr.join(''))
    return res.join('') === arr.join('') ? res : transformArray(res)
}

let arr = [1, 6, 3, 4, 3, 5]
console.log(transformArray(arr)) // [1, 4, 4, 4, 4, 5]
