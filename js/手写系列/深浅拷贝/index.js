// 栈中赋值的效果是深拷贝 堆中赋值效果是浅拷贝

// let a = 1
// let b = a
// a = 2
// console.log(b)

// let a = {
//   name: '大白'
// }
// let b = a
// a.name = '柯南'
// console.log(b) // 柯南

// concat slice 原始类型深拷贝， 引用类型浅拷贝
// concat slice 统称为浅拷贝 拷贝不彻底
// 数组元素的拼接
// let arr = ['old', 1, true, null, undefined]
// let new_arr = arr.concat()
// arr[0] = 'new'
// console.log(arr) // [ 'new', 1, true, null, undefined ]
// console.log(new_arr) // [ 'old', 1, true, null, undefined ]

// let arr = [{old: 'old'}, 1, true, null, undefined]
// let new_arr = arr.concat()
// arr[0].old = 'new'
// console.log(arr) // [ { old: 'new' }, 1, true, null, undefined ]
// console.log(new_arr) // [ { old: 'new' }, 1, true, null, undefined ]

// let arr = ['old', 1, true, null, undefined]
// let new_arr = arr.slice()
// console.log(new_arr) // [ 'old', 1, true, null, undefined ]
// arr[0] = 'new'
// new_arr = arr.slice()
// console.log(new_arr) // [ 'new', 1, true, null, undefined ]
// arr = [{old: 'old'}, 1, true, null, undefined]
// new_arr = arr.slice()
// console.log(new_arr) // [ { old: 'old' }, 1, true, null, undefined ]
// arr[0].old = 'new'
// console.log(new_arr) // [ { old: 'new' }, 1, true, null, undefined ]

// 数组深拷贝 该方法无法识别undefined 不能拷贝函数 可以拷贝数组
// arr = [{old: 'old'}, 1, true, null, undefined]
// let new_arr = JSON.parse(JSON.stringify(arr))
// arr[0].old = 'new'
// console.log(new_arr) // [ { old: 'old' }, 1, true, null, null ]

let arr = [function () {console.log('a')}, {b: function () {console.log('b')}}]
let new_arr = JSON.parse(JSON.stringify(arr))
console.log(new_arr) // [ null, {} ]