// 鸡尾酒排序  设置两个边界值

var cocktailSort = function (arr) {
    // 来去为一回合，共循环数组长度的一半
    // console.log(arr.length)
    var temp // 交换时暂存变量
    var leftBorder = 0, rightBorder = arr.length - 1 // 设置左右边界值
    var leftSortIndex, rightSortIndex //设置左边最后一组交换位置的下标，右边最后一组交换位置的下标
    var isSorted // 标记是否进行交换
    console.time('鸡尾酒排序耗时')
    for (var i = 0; i < arr.length / 2; i++) {
        // 从左向右依次比较并进行交换
        isSorted = true
        for (var j = leftBorder; j < rightBorder; j++) {
            if (arr[j] > arr[j+1]) {
                // 进行交换
                temp = arr[j] 
                arr[j] = arr[j+1]
                arr[j+1] = temp
                isSorted = false
                rightSortIndex = j
            }
        }
        rightBorder = rightSortIndex
        console.log(i,arr)
        if (isSorted) break
        // 标记未进行交换
        isSorted = true
        // 从右向左依次比较进行交换
        for (var k = rightBorder; k > leftBorder; k--){
            if (arr[k] < arr[k-1]) {
                temp = arr[k]
                arr[k] = arr[k-1]
                arr[k-1] = temp
                isSorted = false
                leftSortIndex = k
            }
        }
        leftBorder = leftSortIndex
        console.log(i,arr)
        if (isSorted) break
    }
    console.timeEnd('鸡尾酒排序耗时')
    return arr
}

var arr = [15, 9, 18, 6, 12, 23, 2, 32, 29]
console.log(cocktailSort(arr))

// arr = [2, 3, 4, 5, 6, 7, 8, 1]
// console.log(cocktailSort(arr))