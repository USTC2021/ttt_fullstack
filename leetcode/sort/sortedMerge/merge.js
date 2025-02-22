/**
 * LeetCode面试题 10.01. 合并排序的数组
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */

var merge = function(A, m, B, n) {
    // console.log(A.length, B.length)
    // 将数组A中右端为0的元素删除，然后再将数组B插入数组A
    A.splice(m, n, ...B)
    // console.log(A)
    // 排序
    A.sort((a, b) => {
        return a - b
    })
    return A
}

var arrA = [1, 2, 3, 0, 0, 0]
var arrB = [2, 5, 6]
var m = 3
var n = 3
console.log(merge(arrA, m, arrB, n))