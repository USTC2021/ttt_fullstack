/**
 * leetCode1365 有多少小于当前数字的数字
 * @param {Array} nums 
 * @param {Array} copyNums
 * @param {Array} sortedNums
 * @param {Array} result
 */

var smallerNumbersThanCurrent = function (nums) {
    // 判断数组是否为空
    if (nums == null || nums.length == 0) return 

    // 将nums数组复制给copynums，需要用Array.from()方法，不能直接复制，否则会受其影响
    var copyNums = Array.from(nums)
    // 将数组进行升序排列
    var sortedNums = nums.sort(function (a, b) {
        return a - b // 升序排列
    })
    // console.log(copyNums, sortedNums)
    var result = [] // 返回个数的数组
    for(var i = 0; i < copyNums.length; i++){
        // console.log(copyNums[i])
        // sortedNums.indexOf() 查找数组中是否有某个元素，返回数组中找到给定元素的第一个索引，否则返回-1 
        if (copyNums[i] != 0){
            // console.log(sortedNums)
            result[i] = sortedNums.indexOf(copyNums[i])
        } else {
            result[i] = 0
        }
    }
    
    return result
}

var nums = [8, 1, 2, 2, 3]
console.log(smallerNumbersThanCurrent(nums)) // [ 4, 0, 1, 1, 3 ]

nums = [6, 5, 4, 8]
console.log(smallerNumbersThanCurrent(nums)) // [ 2, 1, 0, 3 ]

nums = [7, 7, 7, 7, 7, 7]
console.log(smallerNumbersThanCurrent(nums)) // [ 0, 0, 0, 0, 0, 0 ]

nums = [5, 0, 10, 0, 10, 6]
console.log(smallerNumbersThanCurrent(nums)) // [2, 0, 4, 0, 4, 3]