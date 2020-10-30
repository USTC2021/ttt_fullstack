// 冒泡算法改进版 添加flag标记表示一轮中是否进行了交换，若进行了交换flag=false，否则则为true，跳出循环

var bubbleSortFlag = function (arr) {
    console.time('2.冒泡排序耗时')
    for (var i = 0; i < arr.length; i++) {
        var flag = true //表示一轮中是否进行交换，默认未进行交换
        for (var j = 0; j < arr.length - i - 1; j++) {
            // 比较相邻两个元素，进行交换
            if (arr[j] > arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                flag = false
            }
            // console.log(arr)
        }
        // console.log(i, arr)
        if (flag) break;
    }
    console.timeEnd('2.冒泡排序耗时')
    return arr
}

var arr = [15, 9, 18, 6, 12, 23, 2, 32, 29]
console.log(bubbleSortFlag(arr))

// var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27]
// console.log(bubbleSortFlag(arr))

// var arr = [3, 5, 2, 4, 1, 6, 7, 8, 9]
// console.log(bubbleSortFlag(arr))