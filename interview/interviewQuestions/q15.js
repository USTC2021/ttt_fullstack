var arr = Array(3)
arr[0] = 2
let res = arr.map(function(elem) {
  return '1'
})
console.log(res)
// [ '1', undefined, undefined ]
// map() 不会对空数组进行检测
// map() 回调函数不会遍历空元素