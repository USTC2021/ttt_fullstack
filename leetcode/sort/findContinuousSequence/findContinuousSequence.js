/**
 * LeetCode剑指 Offer 57 - II. 和为s的连续正数序列
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    var j = 0, arr = [], m, n, result = []
    for (var i = 1; i < target; i++) {
        // 获取序列首尾值 i n
        m = 2 * target + i * i - i + 0.25
        // console.log(m)
        if (i * i < m) {
            n = Math.sqrt(m) - 0.5
        }
        if (n % 1 === 0) {
            // console.log(i, n)
            // 遍历符合的序列
            result[j++] = sequence(i, n)
        } 
    }
    // 遍历符合的序列
    function sequence(i, n) {
        var seqArr = [], j = 0
        for(var k = i; k <= n; k++) {
            seqArr[j++] = k
        }
        return seqArr
    }
    // console.log(result)
    return result
}

var target = 9
console.log(findContinuousSequence(target))

var target = 15
console.log(findContinuousSequence(target))