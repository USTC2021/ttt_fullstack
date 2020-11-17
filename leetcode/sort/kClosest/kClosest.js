/**
 * LeetCode973. 最接近原点的 K 个点
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

var kClosest = function(points, k) {
    var map = new Map(), result = []
    // 计算每个点距原点的距离
    points.forEach((item) => {
        // console.log(item, item[0], item[1])
        var disc = item[0] * item[0] + item[1] * item[1]
        map.set(item, disc)
    })
    // console.log(map)
    // 对map以value值进行升序排序
    map = new Map([...map].sort((a, b) => a[1] - b [1]))
    // console.log(map)
    // 将所有点存入数组中
    for (let item of map.keys()) {
        result.push(item)
    }
    // 获取k个点
    result.splice(k, result.length - k)
    // console.log(result)
    return result
}

var points = [[1, 3], [-2, 2]]
var k = 1
console.log(kClosest(points, k))

var points = [[3, 3], [5, -1], [-2, 4]]
var k = 2
console.log(kClosest(points, k))