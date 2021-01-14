// js 中 数组是一种特殊的对象

// 数组的创建
// 1. 字面量方式

// const nums = [1, 5, 6, 9]
// console.log(nums, nums.length) // [ 1, 5, 6, 9 ] 4

// 2. 构造函数方式

// let nums = new Array(1, 5, 6, 9)
// console.log(nums, nums.length) // [ 1, 5, 6, 9 ] 4

// 在js中，数组数据可以是不同类型的

// let nums = [1, 'Jane', true, null]
// console.log(nums, nums.length) // [ 1, 'Jane', true, null ] 4

// 可以通过Array.isArray()判断一个对象是否是数组

// let nums = [1, 5, 6, 9]
// console.log(Array.isArray(nums)) // true



// 数组的读写

// let nums = [1, 5, 6, 9]
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i])
// }
// 结果：
// 1
// 5
// 6
// 9




// 数组的深复制与浅复制
// 浅复制：将数组赋给另一个数组，当改变其中一个数组的值时，另一个数组也会随之改变
// 深复制：不改变原来的数组是情况下去创建一个新的数组

// 浅复制
// let nums = [1, 2, 3, 4, 5, 6]
// let newNums = nums
// nums[0] = 9
// console.log(nums, newNums) // [ 9, 2, 3, 4, 5, 6 ] [ 9, 2, 3, 4, 5, 6 ]

// 深复制
// let nums = [1, 2, 3, 4, 5, 6]
// let newNums = []
// for (let i = 0; i < nums.length; i++) {
//   newNums[i] = nums[i]
// }
// nums[0] = 9
// console.log(nums, newNums) // [ 9, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ]



// 存取函数

// indexOf() 返回指定查找的值在目标值中是否存在，若存在，返回该值在数组中的索引，若不存在则返回-1

// let words = ['q', 'w', 'e', 'r', 't']
// console.log(words.indexOf('w')) // 1
// console.log(words.indexOf('p')) // -1

// join() toString() 将数组转成字符串  join() 还可以以某种形式将数组转成字符串

// let words = ['h', 'e', 'l', 'l', 'o']
// console.log(words.join()) // h,e,l,l,o
// console.log(words.join('')) // hello
// console.log(words.toString()) // h,e,l,l,o

// concat() splice() 通过已有数组创建新的数组
// concat() 通过合并多个数组形成新的数组
// splice() 截取一个数组的子集作为一个新的数组

// const arr1 = ['hello', 'hi', 'get', 'milk']
// const arr2 = ['apple', 'banana', 'pear']
// let arr = arr1.concat(arr2)
// console.log(arr) // [ 'hello', 'hi', 'get', 'milk', 'apple', 'banana', 'pear' ]
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newNums = nums.splice(3, 2) // 3 表示索引，2 表示删除的个数
// console.log(newNums, nums) // [ 4, 5 ] [ 1, 2, 3, 6, 7, 8, 9 ]



// 可变函数 -------- 不去引用数组中的某个元素就能改变数组的内容

// push() 在数组末尾添加元素
// unshift() 在数组开头添加元素
// pop() 删除数组末尾的元素
// shift() 删除数组的第一个元素

// let nums = [7, 23, 15, 61, 39]
// nums.push(53)
// console.log(nums) // [ 7, 23, 15, 61, 39, 53 ]
// nums.unshift(20)
// console.log(nums) // [ 20,  7, 23, 15, 61, 39, 53 ]
// nums.pop()
// console.log(nums) // [ 20, 7, 23, 15, 61, 39 ]
// nums.shift()
// console.log(nums) // [ 7, 23, 15, 61, 39 ] 

// splice() 不仅可以用来删除元素，还可以用来添加元素
// sort() 数组排序 只能对字符串类型的元素排列的比较准确，数字排列不准确
// reverse() 将数组内的元素翻转

// let nums = [51, 29, 43, 17, 21, 8]
// nums.splice(3, 0, 65) // 2 表示索引，0 表示不删除元素，65表示往数组中添加的元素
// console.log(nums) // [ 51, 29, 43, 65, 17, 21, 8 ]
// nums.sort()
// console.log(nums) // [ 17, 21, 29, 43, 51, 65, 8 ] 不准确
// console.log(nums.reverse()) // [ 8, 65, 51, 43, 29, 21, 17 ]
// let words = ['hello', 'hi', 'get', 'milk']
// console.log(words.sort()) // [ 'get', 'hello', 'hi', 'milk' ] 按字母a-z排列
// // 若使用排序时要想避免该错误就需要在调用sort()时传入一个函数，该函数可以比较出大小
// nums.sort((a, b) => { // 从小到大排序
//   return a - b // 两数相减，若结果为正，被减数大于减数，若结果为0，两数相等，若结果为负，被减数小于减数
// })
// console.log(nums) // [ 8, 17, 21, 29, 43, 51, 65 ]



// 迭代器方法

// 不返回新数组

// forEach() 遍历数组

// let nums = [1, 2, 3, 4, 5, 6]
// nums.forEach(function(item) {
//   console.log(item, item * item)
// })
// 结果：
// 1 1
// 2 4
// 3 9
// 4 16
// 5 25
// 6 36

// every() 返回Boolean类型，对于应用的所有元素，返回true
// let nums = [1, 3, 5, 7]
// function isOdd(num) {
//   console.log(num)
//   return num % 2 !== 0
// }
// console.log(nums.every(isOdd))
// 结果：
// 1
// 3
// 5
// 7
// true

// some() 与every()不同的是只要有一个元素使该函数返回true，那么就返回true
// let nums = [1, 3, 5, 7]
// function isOdd(num) {
//   console.log(num)
//   return num % 2 !== 0
// }
// console.log(nums.some(isOdd))
// 结果：
// 1
// true

// reduce() 可以对数组元素进行求和，也可以将数组元素连接成字符串

// let nums = [1, 2, 3, 4, 5]
// let sum = nums.reduce((a, b) => {
//   return a + b
// })
// console.log(sum) // 15
// let words = ['I ', 'like ', 'china']
// let str = words.reduce((item, i) => {
//   return item + i
// })
// console.log(str) // I like china


// 返回新数组

// map() 与forEach一样，但map()返回的是一个新数组 
// let nums = [52, 16, 87, 63, 29]
// let result = nums.map(item => {
//   console.log(item)
//   return item += 5
// })
// console.log(result)
// 结果：
// 52
// 16
// 87
// 63
// 29
// [ 57, 21, 92, 68, 34 ]

// filter 与every相似，区别在于当所有元素使该函数为true时，它返回的是一个新的数组，而不是Boolean类型

// let nums = []
// for (let i = 0; i < 10; i++) {
//   nums[i] = Math.floor(Math.random() * 101)
// }
// let result = nums.filter(item => item >= 60)
// console.log(nums, result) // [ 5, 18, 33, 74, 6, 69, 79, 78, 61, 93 ] [ 74, 69, 79, 78, 61, 93 ]



// 二维数组

// let nums = [[1, 3, 5], [2, 9, 6]]
// console.log(nums[1][2]) // 6



// 处理二维数组

// 1. 按列访问
// let nums = [[1, 3, 5], [2, 9, 6]]
// for (let i = 0; i < nums.length; i++) { // 行
//   for (let j = 0; j < nums[i].length; j++) { // 列
//     console.log(nums[i][j])
//   }
// }
// 结果：
// 1
// 3
// 5
// 2
// 9
// 6

// 2. 按行访问
// let nums = [[1, 3, 5], [2, 9, 6]]
// for (let i = 0; i < nums[0].length; i++) { // 行
//   for (let j = 0; j < nums.length; j++) { // 列
//     console.log(nums[j][i])
//   }
// }
// 结果：
// 1
// 2
// 3
// 9
// 5
// 6



// 对象数组

function Point(x, y) {
  this.x = x
  this.y = y
}

function show(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], arr[i].x, arr[i].y)
  }
}

let p1 = new Point(1, 2)
let p2 = new Point(6, 9)
let p3 = new Point(5, 7)
let p4 = new Point(8, 3)

let arr = [p1, p2, p3, p4]
show(arr)
// 结果：
// Point { x: 1, y: 2 } 1 2
// Point { x: 6, y: 9 } 6 9
// Point { x: 5, y: 7 } 5 7
// Point { x: 8, y: 3 } 8 3

let p5 = new Point(9, 4)
// 末尾添加元素
arr.push(p5)
show(arr)
// 结果：
// Point { x: 1, y: 2 } 1 2
// Point { x: 6, y: 9 } 6 9
// Point { x: 5, y: 7 } 5 7
// Point { x: 8, y: 3 } 8 3
// Point { x: 9, y: 4 } 9 4

// 头部添加元素
let p6 = new Point(7, 2)
arr.unshift(p6)
show(arr)
// 结果：
// Point { x: 7, y: 2 } 7 2
// Point { x: 1, y: 2 } 1 2
// Point { x: 6, y: 9 } 6 9
// Point { x: 5, y: 7 } 5 7
// Point { x: 8, y: 3 } 8 3
// Point { x: 9, y: 4 } 9 4

// 尾部删除元素
arr.pop()
show(arr)
// 结果：
// Point { x: 7, y: 2 } 7 2
// Point { x: 1, y: 2 } 1 2
// Point { x: 6, y: 9 } 6 9
// Point { x: 5, y: 7 } 5 7
// Point { x: 8, y: 3 } 8 3

// 头部删除元素
arr.shift()
show(arr)
// 结果：
// Point { x: 1, y: 2 } 1 2
// Point { x: 6, y: 9 } 6 9
// Point { x: 5, y: 7 } 5 7
// Point { x: 8, y: 3 } 8 3


// 数组的其他常用方法

// indexOf() 返回返回调用String对象中第一次出现的指定值的索引，若不存在则返回-1
// lastIndexOf() 返回指定元素在数组中的最后一个的索引，如果不存在则返回-1
// let nums = [2, 5, 8, 6, 7]
// console.log(nums.indexOf(3)) // -1
// console.log(nums.indexOf(6)) // 3
// console.log(nums.lastIndexOf(5)) // 1
// console.log(nums.lastIndexOf(1)) // -1

// includes() 用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false
// let nums = [1, 2, 3, 4, 5, NaN]
// console.log(nums.includes(2)) // true
// console.log(nums.includes(6)) // false
// console.log(nums.includes(3, 3)) // false
// console.log(nums.includes(4, -1)) // false
// console.log(nums.includes(NaN)) // true

// fill() 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素，但不包括终止索引
// let nums = [1, 2, 3, 4, 5];
// nums = new Array(nums.length).fill(0);
// console.log(nums) // [ 0, 0, 0, 0, 0 ]

// find() 返回数组中满足提供的测试函数的第一个元素的值，否则返回 undefined
// const fruits = [
//   {name: 'apples', quantity: 3},
//   {name: 'bananas', quantity: 2},
//   {name: 'pears', quantity: 5}
// ];

// function findBananas(fruit) { 
//   return fruit.name === 'bananas';
// }

// console.log(fruits.find(findBananas)) // { name: 'bananas', quantity: 2 }


// findIndex() 返回数组中满足提供的测试函数的第一个元素的索引，否则返回-1
// const grades = [45, 68, 76, 31, 93];

// function isPass(grade) {
//   return grade >= 60;
// }

// console.log(grades.findIndex(isPass)) // 1