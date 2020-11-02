/**
 * LeetCode349. 两个数组的交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // set集合去除重复元素
    // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
    return [...new Set(nums1)].filter(item => nums2.includes(item))
}

var nums1 = [1, 2, 2, 1]
var nums2 = [2, 2]
console.log(intersection(nums1, nums2)) // [2]

var nums1 = [4, 9, 5]
var nums2 = [9, 4, 9, 8, 4]
console.log(intersection(nums1, nums2)) // [9, 4]