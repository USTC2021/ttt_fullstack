// let reg = new RegExp('<%[^%>]+%>', 'g');

// let reg = /<%[^%>]+%>/g

console.log('abchello'.search(/hello/)) // 3
console.log('abchell'.search(/hello/)) // -1

console.log('abchello'.replace(/hello/, 'hi')) // abchi

console.log(/hello/.test('abchello')) // true

console.log('qwehelloasdfhellozxvnmxhellohkjp'.split(/hello/)) // [ 'qwe', 'asdf', 'zxvnmx', 'hkjp' ]

console.log('qwehelloasdfhellozxvnmxhellohkjp'.match(/hello/)) // [ 'hello' ]
console.log('qwehelloasdfhellozxvnmxhellohkjp'.match(/hello/g)) // [ 'hello', 'hello', 'hello' ]

console.log(/hello/g.exec('qwehelloasdfhellozxvnmxhellohkjp')) // [ 'hello' ]

let reg = /hello/g
console.log(reg.lastIndex) // 用来便利捕获字符串中的子串 0
reg.exec('qwehelloasdfhellozxvnmxhellohkjp')
console.log(reg.lastIndex) // 8
reg.exec('qwehelloasdfhellozxvnmxhellohkjp')
console.log(reg.lastIndex) // 17
reg.exec('qwehelloasdfhellozxvnmxhellohkjp')
console.log(reg.lastIndex) // 28
reg.exec('qwehelloasdfhellozxvnmxhellohkjp')
console.log(reg.lastIndex) // 0

let str = 'sgudcbsjbckankdanknfnsndndcksnck'
const arr = str.split(/\s*/) // 将字符串转换成数组
const str2 = arr.sort().join('') // 排序，然后转成字符串

let value = ''
let index = 0
str2.replace(/(\w)\1*/g, function($0, $1) { // 匹配字符
  if (index < $0.length) {
    index = $0.length // index 出现次数
    value = $1 // value 对应的字符
  }
})
console.log(`最多的字符: ${value}, 重复的次数: ${index}`) // 最多的字符: n, 重复的次数: 7