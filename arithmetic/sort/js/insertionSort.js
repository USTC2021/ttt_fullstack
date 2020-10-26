// 实现插入排序

function insertSort (arr) {
    var result = []
    // 获取第一个元素
    result[0] = arr[0]

    var temp, // 暂时存储需排序的元素
    j
    // 依次从有序区末尾进行比较
    for (var i = 1; i < arr.length; i++) {
        // 获取需排序的元素
        temp = arr[i]
        for (j = i - 1; j >= 0; j--) {
            // 当比较的有序区元素大于需排序的元素时 该元素向后一位
            if (temp < result[j]){
                result[j+1] = result[j]
            } else{
                // 需排序的元素大于比较的有序区元素时 跳出循环
                break 
            }
        }
        result[j+1] = temp
    }

    // 返回排序好的数组
    return result
}

var arr = [15, 9, 18, 6, 12, 23, 2, 32, 29, 17]
console.log(insertSort(arr))