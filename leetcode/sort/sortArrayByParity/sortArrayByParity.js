/**
 * LeetCode905. 按奇偶排序数组
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParity = function(A) {
    // var arr1 = [], arr2 = []
    // A.forEach((item) => {
    //     if (item % 2 ==0) {
    //         arr1.push(item)
    //     } else {
    //         arr2.push(item)
    //     }
    // })
    // return arr1.concat(arr2)

    return A.sort((a, b) =>
        (a & 1) - (b & 1)
        // console.log((a & 1) - (b & 1), a, b, (a & 1), (b & 1))
    )
}

var arr = [3, 1, 2, 4]
console.log(sortArrayByParity(arr))