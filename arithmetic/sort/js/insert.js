// 实现插入排序
function insertSort(array) {
    // 获取第一个元素
    var result = array.slice(0),  // obj.slice() 表示从已有的数组中返回选定的元素
        temp, // 用于元素交换
        j     // 已排序的序列下标

    console.time('插入排序耗时：')
    for (var i = 1; i < array.length; i++) {
        temp = array[i] // 取出需要插入的元素
        j = i - 1 // 获取已排序序列的最后一个元素下标
        for (; j >= 0 && temp < result[j]; j--) { // 将大于插入元素向后移动
            result[j + 1] = result[j]
        }
        result[j + 1] = temp // 插入所取出的元素
    }
    console.timeEnd('插入排序耗时：')
    
    return result
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(insertSort(arr))