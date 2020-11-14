/**
 * LeetCode1329. 将矩阵按对角线排序
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    var row = mat.length - 1, col = mat[0].length - 1, temp
    // console.log(row, col)
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            for (var m = i+1, n = j+1; m <= row, n <= col; m++, n++) {
                // console.log(i, j, m, n)
                // console.log(mat[i][j], mat[m][n], i, j, m, n)
                if (m <= row && n <= col && mat[i][j] > mat[m][n]) {
                    // console.log(mat[i,j], mat[m, n], i, j, m, n)
                    temp = mat[i][j]
                    mat[i][j] = mat[m][n]
                    mat[m][n] = temp
                }
                // console.log(mat[i,j], mat[m, n], i, j, m, n)
            }
            // console.log(mat)
        }
    }
    return mat
}

var mat = [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]]
console.log(diagonalSort(mat))