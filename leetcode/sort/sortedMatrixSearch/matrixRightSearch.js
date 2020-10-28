/**
 * leetcode面试题10.09.排序矩阵查找
 * @param {number [][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
    // 计算数组长度
    let len_row = matrix.length
    if (len_row < 1) return false
    // 获取右上角元素的下标
    let len_col = matrix[0].length
    let row = 0, col = len_col - 1
    while (row < len_row && col >= 0) {
        if (matrix[row][col] == target) return true
        if (matrix[row][col] > target) {
            col--
        } else {
            row++
        }
    }
    return false
}

var matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]
var target = 5
console.log(searchMatrix(matrix, target)) // true

target = 20
console.log(searchMatrix(matrix, target)) // false

matrix = []
target = 0
console.log(searchMatrix(matrix, target)) // false

matrix = [[-5]]
target = -5
console.log(searchMatrix(matrix, target)) // true

matrix = [[-1, 3]]
target = 3
console.log(searchMatrix(matrix, target)) // true

matrix = [[1, 1]]
target = 2
console.log(searchMatrix(matrix, target)) // false