// Array.prototype.f = 'f'
// let arr = ['a', 'b', 'c']

// 下标
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let i of arr) {
//     console.log(i)
// }

// for-of for-in差别 面试高频题

let obj = {
    name: 'dabai',
    age: 16,
    sex: 'boy'
}
// console.log(Object.keys(obj))
// for (let i = 0; i < Object.keys(obj).length; i++) {
//     console.log(obj[Object.keys(obj)[i]])
// }

for (let key in obj) {
    console.log(key) // name age sex
    console.log(obj[key]) // dabai 16 boy
}

// for-of 不能遍历对象，其里面没有迭代器
// for-in 可以遍历数组，不建议使用其遍历数组，有bug，for-in会把原型上的属性遍历出来，for-of则不会

obj.height = 180
for (let key in obj) {
    console.log(key) // name age sex height
    console.log(obj[key]) // dabai 16 boy 180
}

function Foo () {
    this[100] = 'test-100'
    this[1] = 'test-1'
    this['b'] = 'bar-B'
    this[50] = 'test-50'
    this[9] = 'test-9'
    this[8] = 'test-8'
    this[3] = 'test-3'
    this[5] = 'test-5'
    this['A'] = 'bar-A'
    this['C'] = 'bar-C'
}
let bar = new Foo()
// console.log(bar)
// Foo {
//     '1': 'test-1',
//     '3': 'test-3',
//     '5': 'test-5',
//     '8': 'test-8',
//     '9': 'test-9',
//     '50': 'test-50',
//     '100': 'test-100',
//     b: 'bar-B',
//     A: 'bar-A',
//     C: 'bar-C'
// }
for (let key in bar) {
    console.log(`index: ${key} value: ${bar[key]}`)
}

// js 遵循 ECMAScript 规范规定
// 数字属性应该按照索引值的大小升序排列
// 字符串属性根据创建时的顺序排列