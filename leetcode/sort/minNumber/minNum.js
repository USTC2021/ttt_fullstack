/**
 * LeetCode剑指 Offer 45. 把数组排成最小的数
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    // 对数组中元素进行排序
    for(var i = 0; i < nums.length - 1; i++) {
        for(var j = i+1; j < nums.length; j++) {
            var s1 = '' + nums[i] + nums[j]
            var s2 = '' + nums[j] + nums[i]
            var temp
            if(s1 > s2) {
                temp = nums[i]
                nums[i] = nums [j]
                nums[j] = temp
            }
        }
    }
    // console.log(nums)
    // 将数组转换成数字
    var str = ""
    for(var k = 0; k < nums.length; k++) {
        str += nums[k]
    }
    // console.log(str)
    return str
}

var arr = [3, 30, 34, 5, 9]
console.log(minNumber(arr)) // 3033459

var arr = [10, 2]
console.log(minNumber(arr)) // 102