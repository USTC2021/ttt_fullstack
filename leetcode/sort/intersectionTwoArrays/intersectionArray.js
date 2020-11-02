/**
 * LeetCode349. 两个数组的交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var result = [], k = 0
    for (var i = 0; i < nums1.length; i++) {
        // 查找元素是否存在交集
        if (nums2.indexOf(nums1[i]) != -1) {
            // 查找是否已经储存
            if(result.indexOf(nums1[i]) == -1){
                result[k++] = nums1[i]
            }
        }
    }
    return result
}

var nums1 = [1, 2, 2, 1]
var nums2 = [2, 2]
console.log(intersection(nums1, nums2)) // [2]

var nums1 = [4, 9, 5]
var nums2 = [9, 4, 9, 8, 4]
console.log(intersection(nums1, nums2)) // [9, 4]