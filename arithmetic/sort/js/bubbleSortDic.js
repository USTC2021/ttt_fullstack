// 冒泡算法晋级 

var bubbleSort = function (arr) {
    var len = arr.length // 设置最后交换元素的位置
    var firstSwrapIndex = 0
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
        // console.log(arr, len)
        if (flag) break;
    }
    return arr
}

var arr = [15, 9, 18, 6, 12, 23, 2, 32, 29, 17]
console.log(bubbleSort(arr))