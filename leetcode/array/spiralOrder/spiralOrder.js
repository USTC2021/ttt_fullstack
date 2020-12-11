/**
 * leetcode剑指 Offer 29. 顺时针打印矩阵
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) 
    return []
  let col = matrix.length, row = matrix[0].length, startX = 0, startY = 0, result = [], direct = 'top'
  // console.log(col, row) // 3 4
  let directions = {
    top: function () {
      for (let i = startX; i < row; i++) {
        result.push(matrix[startY][i])
      }
      direct = 'right'
      startY++
      // console.log(direct, result)
    },
    right: function () {
      for (let i = startY; i < col; i++) {
        result.push(matrix[i][row - 1])
      }
      direct = 'bottom'
      row--
      // console.log(direct, result)
    },
    bottom: function () {
      for (let i = row - 1; i >= startX; i--) {
        result.push(matrix[col - 1][i])
      }
      direct = 'left'
      col--
      // console.log(direct, result)
    },
    left: function () {
      for (let i = col - 1; i >= startY; i--) {
        result.push(matrix[i][startX])
      }
      direct = 'top',
      startX++
      // console.log(direct, result)
    }
  }
  while (result.length < matrix.length * matrix[0].length) {
    directions[direct]()
  }
  // console.log(result)
  return result
}

// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(spiralOrder(matrix)) // [1, 2, 3, 6, 9, 8, 7, 4, 5]

let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
console.log(spiralOrder(matrix)) // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]