/**
 * LeetCode剑指 Offer 11. 旋转数组的最小数字
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > numbers[i + 1])
            return numbers[i + 1]
    }
    return numbers[0]
}

// var minArray = function(numbers) {
//     numbers.sort((a, b) => a - b)
//     return numbers[0]
// }

var nums = [3, 4, 5, 1, 2]
console.log(minArray(nums))

var nums = [2, 2, 2, 0, 1]
console.log(minArray(nums))

var nums = [1, 3, 5]
console.log(minArray(nums))