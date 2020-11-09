/**
 * LeetCode剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 * @param {number[]} nums
 * @return {number[]}
 */

var exchange = function(nums) {
    var oddArr = [], evenArr = []
    nums.forEach(item => {
        item % 2 ? oddArr.push(item) : evenArr.push(item)
    })
    return oddArr.concat(evenArr)
}

var nums = [1, 2, 3, 4]
console.log(exchange(nums))

var nums = [1, 2, 15, 18, 3, 4, 9, 11, 20]
console.log(exchange(nums))