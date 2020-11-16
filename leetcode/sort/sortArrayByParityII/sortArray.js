/**
 * LeetCode922. 按奇偶排序数组 II
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParityII = function(A) {
    var len = A.length, j = 1
    for (var i = 0; i < len; i += 2) {
        if (A[i] % 2 == 1) {
            while (A[j] % 2 == 1) {
                j += 2
            }
            var temp = A[i]
            A[i] = A[j]
            A[j] = temp
        }
    }
    return A
}

// var arr = [4, 2, 5, 7, 10, 3]
// console.log(sortArrayByParityII(arr))

var arr = [2, 3, 1, 1, 4, 0, 0, 4, 3, 3]
console.log(sortArrayByParityII(arr))