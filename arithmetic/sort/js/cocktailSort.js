// 鸡尾酒排序

var cocktailSort = function (arr) {
    // 来去为一回合，共循环数组长度的一半
    // console.log(arr.length)
    var temp // 交换时暂存变量
    for (var i = 0; i < arr.length / 2; i++) {
        // 从左向右依次比较并进行交换
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                // 进行交换
                temp = arr[j] 
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        // console.log(i,arr)
        // 从右向左依次比较进行交换
        for (var k = arr.length - 1 - i; k > i; k--){
            if (arr[k] < arr[k-1]) {
                temp = arr[k]
                arr[k] = arr[k-1]
                arr[k-1] = temp
            }
        }
        // console.log(i,arr)
    }
    return arr
}

var arr = [15, 9, 18, 6, 12, 23, 2, 32, 29, 17]
console.log(cocktailSort(arr))