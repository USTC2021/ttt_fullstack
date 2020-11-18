/**
 * LeetCode面试题4. 二维数组中的查找
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var findNumberIn2DArray = function(matrix, target) {
    // return matrix.join().split(',').includes(target.toString())


    // console.log(matrix.length, matrix[0].length)
    // for (var i = 0; i < matrix.length; i++) {
    //     for (var j = 0; j < matrix[0].length; j++) {
    //         // console.log(matrix[i][j])
    //         if (matrix[i][j] == target) {
    //             return true
    //         }
    //     }
    // }
    // return false


    // for (var i = 0; i < matrix.length; i++) {
    //     // console.log(matrix[i])
    //     if (matrix[i].includes(target) == true) {
    //         return true
    //     }
    // }
    // return false

    var rows = matrix.length, row = 0
    if (rows == 0) return false
    var column = matrix[0].length - 1
    while(row < rows && column >= 0) {
        var num = matrix[row][column]
        if (num < target) {
            row++
        }
        if (num > target) {
            column--
        }
        if (num == target) {
            return true
        }
    }
    return false
}

var matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]
var target = 5
console.log(findNumberIn2DArray(matrix, target))

var target = 20
console.log(findNumberIn2DArray(matrix, target))

var matrix = []
var target = 5
console.log(findNumberIn2DArray(matrix, target))

var matrix = [[-5]]
var target = -5
console.log(findNumberIn2DArray(matrix, target))