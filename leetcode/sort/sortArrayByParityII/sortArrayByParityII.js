/**
 * LeetCode922. 按奇偶排序数组 II
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParityII = function(A) {
    // var left = 0, right = A.length - 1
    var arr1 = [], arr2 = [], result = []
    A.forEach((item, index) => {
        // console.log(item, index)
        if (item % 2 == 0) {
            arr1.push(item)
        } else {
            arr2.push(item)
        }
    })
    // console.log(arr1, arr2)
    for (var i = 0; i < A.length / 2; i++) {
        // console.log(A.length / 2)
        result.push(arr1[i])
        result.push(arr2[i])
    }
    // while (left < right) {
    //     if ((left % 2 == 0 && A[left] % 2 == 0) || (left % 2 != 0 && A[left] % 2 != 0)) {
    //         left++
    //         continue
    //     }
    //     if ((right % 2 == 0 && A[right] % 2 == 0) || (right % 2 != 0 && A[right] % 2 != 0)) {
    //         right--
    //         continue
    //     }
        // console.log(left, A[left], right, A[right])
        // if ((A[left] % 2) != (A[right] % 2)) {
        //     var temp = A[left]
        //     A[left] = A[right]
        //     A[right] = temp
        // } else {
            // var middle = right - 1
            // if ((middle % 2 == 0 && A[middle] % 2 == 0) || (middle % 2 != 0 && A[middle] % 2 != 0)) {
            //     middle--
            //     continue
            // } else {
            //     if ((A[middle] % 2) != A[right] % 2) {
            //         var temp = A[right]
            //         A[right] = A[middle]
            //         A[middle] = temp
            //     }
            // }
            // right = middle
            // left--
        // }
        // left++
        // right--
        // console.log(left, A[left], right, A[right])
    // } 
    // console.log(A)
    // return A
    return result
}

// var arr = [4, 2, 5, 7, 10, 3]
// console.log(sortArrayByParityII(arr))

var arr = [2, 3, 1, 1, 4, 0, 0, 4, 3, 3]
console.log(sortArrayByParityII(arr))