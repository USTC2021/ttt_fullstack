// 鸡尾酒排序 设置是否交换标志

var cocktailRanking = function (arr) {
    // 来去为一回合，共循环数组长度的一半
    // console.log(arr.length)
    var temp // 交换时暂存变量
    var isSorted // 标记是否进行交换
    for (var i = 0; i < arr.length / 2; i++) {
        // 从左向右依次比较并进行交换
        isSorted = true
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                // 进行交换
                temp = arr[j] 
                arr[j] = arr[j+1]
                arr[j+1] = temp
                isSorted = false
            }
        }
        console.log(i,arr)
        if (isSorted) break
        // 标记未进行交换
        isSorted = true
        // 从右向左依次比较进行交换
        for (var k = arr.length - 1 - i; k > i; k--){
            if (arr[k] < arr[k-1]) {
                temp = arr[k]
                arr[k] = arr[k-1]
                arr[k-1] = temp
                isSorted = false
            }
        }
        console.log(i,arr)
        if (isSorted) break
    }
    return arr
}

var arr = [15, 9, 18, 6, 12, 23, 2, 32, 29, 17]
// console.log(cocktailRanking(arr))

arr = [2, 3, 4, 5, 6, 7, 8, 1]
console.log(cocktailRanking(arr))