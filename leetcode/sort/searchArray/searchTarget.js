/**
 * LeetCode81. 搜索旋转排序数组 II
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var arr = Array.from(new Set(nums))
    // console.log(arr)
    if (arr.indexOf(target) != -1) {
        return true
    } 
    return false
    // return Array.from(new Set(nums)).indexOf(target) == -1 ? false : true
}

var nums = [4, 5, 6, 7, 0, 1, 2]
var target = 0
console.log(search(nums, target))

var nums = [2, 5, 6,0, 0, 1, 2]
var target = 3
console.log(search(nums, target))

var target = 0
console.log(search(nums, target))