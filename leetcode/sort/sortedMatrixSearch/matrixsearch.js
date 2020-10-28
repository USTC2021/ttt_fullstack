/**
 * leetcode面试题10.09.排序矩阵查找
 * @param {number [][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
    var find // 返回每一行的查找是否存在与target值相等的元素的结果
    for (var i = 0; i < matrix.length; i++){
        console.log(matrix[i])
        find = matrix[i].indexOf(target)
        if (find != -1)
            return true
    }
    return false
}

var matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]
var target = 5
console.log(searchMatrix(matrix, target)) // true

var target = 20
console.log(searchMatrix(matrix, target)) // false

var matrix = []
target = 0
console.log(searchMatrix(matrix, target)) // false