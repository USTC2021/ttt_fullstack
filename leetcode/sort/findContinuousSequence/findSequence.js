/**
 * LeetCode剑指 Offer 57 - II. 和为s的连续正数序列
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    var num = Math.ceil(target) // 向上取整，返回大于等于函数参数，并与之最接近的整数
    var tempArr = [], result = [], sum = 0, k = 0, j = 1
    
    for (var i = 1; i < num; i++) {
        tempArr.push(i)
        // console.log(tempArr)
        sum = tempArr.reduce((pre, next) => {
            return pre + next
        })
        // console.log(i, sum)
        // console.log(tempArr)
        if (sum >= target) {
            i = j++
            // console.log(i)
            if (sum === target) {
                result[k++] = tempArr
                // console.log(tempArr)
            }
            tempArr = []
        }
    }
    // console.log(result)
    return result
}

var target = 9
console.log(findContinuousSequence(target))

var target = 15
console.log(findContinuousSequence(target))