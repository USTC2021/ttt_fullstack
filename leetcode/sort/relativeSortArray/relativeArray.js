/**
 * LeetCode1122. 数组的相对排序
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    return arr1.sort((a, b) => {
        // console.log(a, b)
        var ai = arr2.indexOf(a)
        var bi = arr2.indexOf(b)
        console.log(a, b, ai, bi)
        // 若两个元素都不存在于arr2中
        if (ai == -1 && bi == -1) {
            return a - b
        } else if (ai !== -1 && bi !== -1) { // 若两个元素都存在于arr2中
            return ai - bi
        } else if (ai == -1) { // 若只有一个存在于arr2中
            return 1
        }
    })
}

var arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
var arr2 = [2, 1, 4, 3, 9, 6]
console.log(relativeSortArray(arr1, arr2)) // [2,2,2,1,4,3,3,9,6,7,19]