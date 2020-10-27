/**
 * leetCode1365 有多少小于当前数字的数字
 * @param {Array} nums 
 * @param {number} count 
 * @param {Array} result 
 */

 var smallerNumbersThanCurrent = function (nums) {
    var result = [],  // 存储返回的值
    count  // 统计个数

    for (var i = 0; i < nums.length; i++) {
        count = 0  // 初始化统计数
        for(var j = 0; j < nums.length; j++) {
            // 统计个数
            if(nums[i] > nums[j]){
                count++
            }
        }
        result[i] = count  // 将统计个数存入数组中
    }
    // 返回统计个数的结果
    return result
 }

 var nums = [8, 1, 2, 2, 3]
 console.log(smallerNumbersThanCurrent(nums)) // [ 4, 0, 1, 1, 3 ]

 nums = [6, 5, 4, 8]
 console.log(smallerNumbersThanCurrent(nums)) // [ 2, 1, 0, 3 ]

nums = [7, 7, 7, 7, 7, 7]
 console.log(smallerNumbersThanCurrent(nums)) // [ 0, 0, 0, 0, 0, 0 ]