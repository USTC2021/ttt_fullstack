/**
 * LeetCode1030. 距离顺序排列矩阵单元格
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */

var allCellsDistOrder = function(R, C, r0, c0) {
    var map = new Map(), resArr = []
    // 获取单元格坐标，并计算距(r0, c0)的距离
    for (var i = 0; i < R; i++) {
        for (var j = 0; j < C; j++) {
            var result = [i, j]
            var disc = Math.abs(r0 - i) + Math.abs(c0 - j)
            map.set(result, disc)
        }
    }
    // console.log(map)
    // 对其距离value进行排序
    map = new Map([...map].sort((a, b) => a[1] - b[1]))
    // console.log(map)
    // 将key值存入数组中
    map.forEach((key, value) => resArr.push(value))
    return resArr
}

var r = 1, c = 2, r0 = 0, c0 = 0
console.log(allCellsDistOrder(r, c, r0, c0)) // [[0,0],[0,1]]

var r = 2, c = 2, r0 = 0, c0 = 1
console.log(allCellsDistOrder(r, c, r0, c0)) // [[0,1],[0,0],[1,1],[1,0]]

var r = 2, c = 3, r0 = 1, c0 = 2
console.log(allCellsDistOrder(r, c, r0, c0)) // [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]