// var obj = {}
// var obj = new Object()
// obj.__proto__ = Object.prototype

// Object.create(原型)

var obj = {
    name: 'wn',
    age: 18
}
var obj1 = Object.create(obj)
// obj1.__proto__ = obj

// 网易面试题
// 所有对象最终都会继承自Object.prototype ×
// 绝大多数对象最终都会继承自Object.prototype √
// 不是的  特例：
```
var obj = Object.create(null)
```
obj.__proto__ = {name: 'wn'}