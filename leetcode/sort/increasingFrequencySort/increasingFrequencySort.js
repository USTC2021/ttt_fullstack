/**
 * LeetCode1636. 按照频率将数组升序排序
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    var map = new Map(), result = []
    // 提取每个值的频率
    nums.forEach((item) => {
        // console.log(item)
        map.set(item, (map.get(item) || 0) + 1)
    })
    // console.log(map)
    // 对频率进行排序，若频率相同，则对值进行排序
    map = new Map([...map].sort(function(a, b) {
        if (a[1] == b[1]) {
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    }))
    // console.log(map)
    // 将map集合转化成符合题意的数组
    map.forEach((key, value) => {
        // console.log(key, value)
        for (var i = 1; i <= key; i++) {
            result.push(value)
        }
    })
    // console.log(result)
    return result
}

// var nums = [1, 1, 2, 2, 2, 3]
// console.log(frequencySort(nums))  // [3,1,1,2,2,2]

var nums = [2, 3, 1, 3, 2]
console.log(frequencySort(nums))  // [1,3,3,2,2]

var nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
console.log(frequencySort(nums))  // [5,-1,4,4,-6,-6,1,1,1]