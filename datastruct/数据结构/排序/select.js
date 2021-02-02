// 选择排序
// 思想：循环遍历数组，每次都找当前范围内的最小值，把它放在当前分为的头部，然后缩小范围，直至数组完全有序为止

let arr = [5, 3, 2, 4, 1]

function selectSort(arr) {
  const len = arr.length
  // minIndex 用来缓存区间内最小值的索引
  let minIndex 
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    // i 是区间的左界，j 是区间的右界
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 如果minIndex对应的元素不是目前数组的头部元素，就交换位置
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

console.log(selectSort(arr))