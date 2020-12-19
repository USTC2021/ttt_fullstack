// 对象数组的浅拷贝
let shallowCopy = function (obj) {
  // 只拷贝对象
  if (typeof obj !== 'object') return;
  // 根据obj的类型判断是创建一个数组还是对象
  let newObj = obj instanceof Array ? [] : {}
  // 遍历obj
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newOb[key] = obj[key]
    }
  }
  return newObj
}

Object.prototype.abc = 123

// let test = ['a', 'b', 'c']
// for (let key in test) {
//   console.log(test.hasOwnProperty(key))
// }