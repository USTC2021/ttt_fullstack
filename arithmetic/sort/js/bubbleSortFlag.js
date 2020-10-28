// 冒泡算法改进版 添加flag标记表示一轮中是否进行了交换，若进行了交换flag=false，否则则为true，跳出循环

var bubbleSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var flag = true
        for (var j = 0; j < arr.length - i; j++) {
            // 比较相邻两个元素，进行交换
            if (arr[j] > arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                flag = false
            }
            // console.log(arr)
        }
        console.log(arr)
        if (flag) break;
    }
    return arr
}

var arr = [15, 9, 18, 6, 12, 23, 2, 32, 29, 17]
console.log(bubbleSort(arr))