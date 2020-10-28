// 冒泡算法

var bubbleSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            // 比较相邻两个元素，进行交换
            if (arr[j] > arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            // console.log(arr)
        }
        console.log(arr)
    }
    return arr
}

var arr = [15, 9, 18, 6, 12, 23, 2, 32, 29, 17]
console.log(bubbleSort(arr))