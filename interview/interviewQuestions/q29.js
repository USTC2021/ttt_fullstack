let arr = [1, 2, , 3]

// 1. arr 的长度？  4
// 2. 取出arr中的空数组项？

// filter 被删除或从来未被赋值的元素不会被遍历到
// let arr = [1, 2, , 3, null, undefined]
// console.log(arr.filter(() => true))

// 3. arr2 = arr.map(parseInt)  arr2 = ?

// arr.map((val, index, arr) => {})
// parseInt(1, 0)
// parseInt(2, 1)
// parseInt(3, 3)
// arr2 = [1, NaN, NaN]

// 4. arr 和 arr2 合并成 arr3 的结果？
// let arr2 = [1, NaN, NaN]
// arr3 = arr.concat(arr2)
// arr3 = [...arr, ...arr2]
// console.log(arr3)
// arr3 = [1, 2, undefined, 3, 1, NaN, NaN]

// 5. 去除arr3中的重复内容
// [...new Set(arr3)]
let res = Array.from(new Set(arr3))