/**
 * LeetCode剑指 Offer 39. 数组中出现次数超过一半的数字
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    var len = nums.length, countLen = len / 2, result, map = new Map()
    nums.forEach(item => {
        map.set(item, (map.get(item) || 0) + 1)
    })
    map.forEach((value, key) => {
        if (value > countLen)
            result = key
    })
    // console.log(result)
    return result
}

var nums = [1, 2, 3, 2, 2, 2, 5, 4, 2]
console.log(majorityElement(nums))

var nums = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(nums))

var nums = [2]
console.log(majorityElement(nums))