/**
 * LeetCode941. 有效的山脉数组
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if (A.length < 3) return false
    // 获取数组中最大值
    var max = Math.max(...A)
    var index = A.indexOf(max)
    // console.log(max, index)
    // var flag = true
    // 判断首元素或最后一个元素是否为最大值
    if (A[0] == max || A[A.length - 1] == max){
        return false
    } else {
        // 注意元素的相等
        // 判断最大值左边元素依次比较
        for(var i = 0; i < index; i++) {
            if(A[i] >= A[i+1]) {
                return false
            }
        }
        // 判断最大值右边元素依次比较
        for(var i = index; i < A.length; i++) {
            if(A[i] <= A[i+1]) {
                return false
            }
        }
    }
    return true
}

var arr = [0, 3, 2, 1]
console.log(validMountainArray(arr))

var arr = [3, 5, 5]
console.log(validMountainArray(arr))

var arr = [2, 1]
console.log(validMountainArray(arr))

var arr = [14, 82, 89, 84, 79, 70, 70, 68, 67, 66, 63, 60, 58, 54, 44, 43, 32, 28, 26, 25, 22, 15, 13, 12, 10, 8, 7, 5, 4, 3]
console.log(validMountainArray(arr))