/**
 * leetcode面试题10.09.排序矩阵查找
 * @param {number [][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
    for (var i = 0; i < matrix.length; i++){
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == target) 
                return true
        }
    }
    return false
}

var matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]
var target = 5
console.log(searchMatrix(matrix, target))

var target = 20
console.log(searchMatrix(matrix, target))