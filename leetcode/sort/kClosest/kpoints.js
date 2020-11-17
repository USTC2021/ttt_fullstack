/**
 * LeetCode973. 最接近原点的 K 个点
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

var kClosest = function(points, k) {
    // return points.sort((a, b) => Math.pow(a[0], 2) + Math.pow(a[1], 2) - Math.pow(b[0], 2) -Math.pow(b[1], 2)).splice(0, k)
    return points.sort((a, b) => a[0] * a[0] + a[1] * a[1] - b[0] * b[0] - b[1] * b[1]).splice(0, k)
    // console.log(points)
}

var points = [[1, 3], [-2, 2]]
var k = 1
console.log(kClosest(points, k))

var points = [[3, 3], [5, -1], [-2, 4]]
var k = 2
console.log(kClosest(points, k))