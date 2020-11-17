/**
 * LeetCode1030. 距离顺序排列矩阵单元格
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */

var allCellsDistOrder = function(R, C, r0, c0) {
    var arr = []
    for (var i = 0; i < R; i++) {
        for (var j = 0; j < C; j++) {
            var disc = Math.abs(r0 - i) + Math.abs(c0 - j)
            arr.push([i, j, disc])
        }
    }
    // console.log(arr)
    arr.sort((a, b) => a[2] - b[2])
    // 将数组中每项的前两项提取出来
    return arr.map(t => {
        t.length = 2
        return t
    })
}

var r = 1, c = 2, r0 = 0, c0 = 0
console.log(allCellsDistOrder(r, c, r0, c0)) // [[0,0],[0,1]]

var r = 2, c = 2, r0 = 0, c0 = 1
console.log(allCellsDistOrder(r, c, r0, c0)) // [[0,1],[0,0],[1,1],[1,0]]

var r = 2, c = 3, r0 = 1, c0 = 2
console.log(allCellsDistOrder(r, c, r0, c0)) // [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]