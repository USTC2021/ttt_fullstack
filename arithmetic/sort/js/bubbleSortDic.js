// 冒泡算法晋级 

var bubbleSortDic = function (arr) {
    var len = arr.length - 1 
    var firstSwrapIndex = 0 // 设置最后交换元素的位置
    console.time('3.冒泡排序耗时')
    for (var i = 0; i < arr.length; i++) {
        var flag = true
        for (var j = 0; j < len; j++) {
            // 比较相邻两个元素，进行交换
            if (arr[j] > arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                flag = false
                firstSwrapIndex = j
            }
            // console.log(arr)
        }
        len = firstSwrapIndex // 最后一次交换的位置
        // console.log(i, arr, len)
        if (flag) break;
    }
    console.timeEnd('3.冒泡排序耗时')
    return arr
}

var arr = [15, 9, 18, 6, 12, 23, 2, 32, 29]
console.log(bubbleSortDic(arr))

// var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27]
// console.log(bubbleSortDic(arr))

// var arr = [3, 5, 2, 4, 1, 6, 7, 8, 9]
// console.log(bubbleSortDic(arr))