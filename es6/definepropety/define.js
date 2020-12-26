let obj = {}
Object.defineProperty(obj, 'num', {
  // 数据描述符
  // value: 1,
  // writable: false, // 是否可写

  // 存取描述符
  enumerable: true, // 是否可枚举
  configurable: false, // 是否可配置
  // getter
  get: undefined, // num 具有get方法
  // setter
  set: function (val) { // num具有set方法
    
  }
})
// obj.num = 1
// for (let key in obj) {
//   console.log(key);
// }
// delete obj.num

console.log(obj);