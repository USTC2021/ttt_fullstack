// 类包装
// 原始值是不能有属性和方法的，属性和方法是对象独有的
// var num = 123
// num.abc = 'aaa'
// console.log(num) // 123

// var num = new Number(123)
// num.abc = 'aaa'
// console.log(num * 2) // 246


var str = 'abcd'
console.log(str.length)
var num = 4 
num.len = 3
// new Number(4).len = 3  // 数字对象，弥补原始值不能添加属性的缺陷
// delete num.len  // 原始值不能添加属性被delete
// 重新执行 new Number(4).len，再次添加，能找到len，但其未有值
console.log(num.len) // undefined

// 以上这种隐式的过程叫作包装类

var arr = [1, 2, 3, 4, 5]
arr.length = 2
console.log(arr) // [1, 2]
var str = 'abcd'
str.length = 2
// new String('abcd').length = 2
// delete str.length
console.log(str)
// new String('abcd').length
console.log(str.length)

// 面试题
var str = 'abc'
str += 1 // 'abc1'
var test = typeof(str)
if (test.length == 6) {
    test.sign = 'typeof的返回结果可能是String'
}
console.log(test.sign)