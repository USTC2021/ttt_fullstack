// 数组对象的深拷贝
let deepCopy = function (obj) {
  // 只拷贝对象
  if (typeof obj !== 'object') return;
  // 根据obj的类型判断是创建一个数组还是对象
  let newObj = obj instanceof Array ? [] : {}
  // 遍历obj
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}

// 尽量用浅拷贝，深拷贝性能不是太好