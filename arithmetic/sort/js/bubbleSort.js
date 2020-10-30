// 冒泡算法

var bubbleSort = function (arr) {
    console.time('1.冒泡排序耗时')
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            // 比较相邻两个元素，进行交换
            if (arr[j] > arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            // console.log(arr)
        }
        // console.log(i, arr)
    }
    console.timeEnd('1.冒泡排序耗时')
    return arr
}

var arr = [15, 9, 18, 6, 12, 23, 2, 32, 29]
console.log(bubbleSort(arr))

// var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27]
// console.log(bubbleSort(arr))

// var arr = [3, 5, 2, 4, 1, 6, 7, 8, 9]
// console.log(bubbleSort(arr))