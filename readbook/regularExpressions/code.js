// let reg = new RegExp('<%[^%>]+%>', 'g');

// let reg = /<%[^%>]+%>/g

// console.log('abchello'.search(/hello/)) // 3
// console.log('abchell'.search(/hello/)) // -1

// console.log('abchello'.replace(/hello/, 'hi')) // abchi

// console.log(/hello/.test('abchello')) // true

// console.log('qwehelloasdfhellozxvnmxhellohkjp'.split(/hello/)) // [ 'qwe', 'asdf', 'zxvnmx', 'hkjp' ]

// console.log('qwehelloasdfhellozxvnmxhellohkjp'.match(/hello/)) // [ 'hello' ]
// console.log('qwehelloasdfhellozxvnmxhellohkjp'.match(/hello/g)) // [ 'hello', 'hello', 'hello' ]

// console.log(/hello/g.exec('qwehelloasdfhellozxvnmxhellohkjp')) // [ 'hello' ]

// let reg = /hello/g
// console.log(reg.lastIndex) // 用来便利捕获字符串中的子串 0
// reg.exec('qwehelloasdfhellozxvnmxhellohkjp')
// console.log(reg.lastIndex) // 8
// reg.exec('qwehelloasdfhellozxvnmxhellohkjp')
// console.log(reg.lastIndex) // 17
// reg.exec('qwehelloasdfhellozxvnmxhellohkjp')
// console.log(reg.lastIndex) // 28
// reg.exec('qwehelloasdfhellozxvnmxhellohkjp')
// console.log(reg.lastIndex) // 0

// let str = 'sgudcbsjbckankdanknfnsndndcksnck'
// const arr = str.split(/\s*/) // 将字符串转换成数组
// const str2 = arr.sort().join('') // 排序，然后转成字符串

// let value = ''
// let index = 0
// str2.replace(/(\w)\1*/g, function($0, $1) { // 匹配字符
//   if (index < $0.length) {
//     index = $0.length // index 出现次数
//     value = $1 // value 对应的字符
//   }
// })
// console.log(`最多的字符: ${value}, 重复的次数: ${index}`) // 最多的字符: n, 重复的次数: 7

// const testString = 'test Test tEsT abdskxc ioewhsnc'
// const reg = /test/gi
// console.log(testString.match(reg)) // [ 'test', 'Test', 'tEsT' ]



// // 使用操作符 |
// const reg = /yes|no|maybe/
// // 匹配任意字符 使用 . 作为任何字符的占位符
// const regexp = /.at/gi
// const testString = 'cat Bat mat DOG egg FAT cupcake sing'
// console.log(testString.match(regexp)) // [ 'cat', 'Bat', 'mat', 'FAT' ]
// // 使用字符类 用来定义匹配的一组字符 []
// const testReg = /[cmf]at/g
// console.log(testString.match(testReg)) // [ 'cat', 'mat' ]
// // 匹配字母表中的字母
// const regTest = /[a-d]at/
// const str1 = 'cat', str2 = 'fat', str3 = 'bat'
// console.log(regTest.test(str1), regTest.test(str2), regTest.test(str3)) // true false true
// // 匹配特定的数字和字母
// const reg1 = /[a-z0-9]/gi
// const testString1 = 'sagiga46323'
// console.log(reg1.test(testString1)) // true
// // 匹配单个未知字符
// const reg2 = /[^aeiou]/gi
// // 匹配所有字母和数字
// const longReg = /[A-Za-z0-9_]+/
// const shortReg = /\w+/
// const num = '46313'
// const str4 = 'dsiohdkcsds'
// console.log(longReg.test(num), shortReg.test(num), longReg.test(str4), shortReg.test(str4)) // true true true true
// // 除了字母和数字，其他的都要匹配
// const reg3 = /\w/gi
// const str5 = '!_$!!'
// const str6 = 'sj456AyTB'
// console.log(reg3.test(str5)) // true
// console.log(reg3.test(str6)) // true
// // 匹配所有数字
// const digitReg = /\d/g
// const strDigit = 'The shirt is $35.12'
// console.log(strDigit.match(digitReg)) // [ '3', '5', '1', '2' ]
// // 匹配所有非数字
// const nonDigitReg = /\D/g
// const nonStr = '463 dshkfsd'
// console.log(nonStr.match(nonDigitReg)) // [' ', 'd', 's', 'h', 'k', 'f', 's', 'd']
// // 匹配空格
// const senReg = /\s/g
// const sentence = 'I like mike'
// console.log(sentence.match(senReg)) // [ ' ', ' ' ]
// // 匹配非空格
// const nonsenReg = /\S/g
// console.log(sentence.match(nonsenReg)) // ['I', 'l', 'i', 'k', 'e', 'm', 'i', 'k', 'e']


// // 匹配一行中出现一次或多次的字符
// const oneOrMoreReg = /a+/gi
// const oneOrMoreStr = 'sahiohankdahka'
// console.log(oneOrMoreStr.match(oneOrMoreReg)) // [ 'a', 'a', 'a', 'a' ]
// // 匹配连续出现零次或多次字符
// const zeroOrMoreReg = /hi*/gi
// const zeroOrMoreStr = 'ahiadahdisdhixc'
// const zeroOrMoreStr2 = 'adakskmd'
// console.log(zeroOrMoreStr.match(zeroOrMoreReg), zeroOrMoreStr2.match(zeroOrMoreReg)) // [ 'hi', 'h', 'hi' ] null
// // 惰性匹配
// // 没人情况下，正则表达式是贪婪的，即匹配满足给定要求的字符串的最长部分
// // 使用 ? 阻止贪婪模式
// const greedyReg = /c[a-z]*t/gi
// const lazyReg = /c[a-z]*?t/gi
// const testStr7 = 'catshidtasji'
// console.log(testStr7.match(greedyReg), testStr7.match(lazyReg)) // [ 'catshidt' ] [ 'cat' ]
// // 匹配字符数
// const regular = 'hihi'
// const superHi = 'hadiojknejodmc'
// const regx = /hi{1,4}/
// console.log(regx.test(regular), regx.test(superHi)) // true false
// // 匹配最低个数的字符数
// const strHi = 'hiiiii'
// const hiReg = /hi{3,}/
// console.log(hiReg.test(regular), hiReg.test(superHi), hiReg.test(strHi)) // false false true
// // 匹配精确的字符数
// const exactReg = /hi{4}/
// console.log(exactReg.test(strHi), exactReg.test(regular)) // true false
// // 匹配0次或1次
// const colSpell = 'Colour'
// const colSpelling = 'color'
// const colReg = /colou?r/i
// console.log(colReg.test(colSpell), colReg.test(colSpelling)) // true true


// // 匹配起始字符串
// const str8 = 'hello world'
// const str9 = 'world is beautiful, hello'
// const startReg = /^hello/
// console.log(startReg.test(str8), startReg.test(str9)) // true false
// // 匹配结束字符串
// const endReg = /hello$/
// console.log(endReg.test(str8), endReg.test(str9)) // false true

console.log(`ashinmdnkbdkchbjduigh`.replace(/h(inm|bj)d/g, '-')) // as-nkbdkc-uigh
console.log('2021-01-08'.replace(/(\d{4})\-(\d{2})\-(\d{2})/g, '$2/$3/$1')) // 01/08/2021
let reg = /\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/
console.log(reg.test('2021-01-08'), reg.test('2021-01.08')) // true false
// 正向前瞻 后面要有xx
console.log('4a5d6sa4da5c1x'.replace(/\w(?=\d)/g, '-')) // 4-5-6s-4d-5-1x
// 负向前瞻 后面不能有xx 
console.log('4a5d6sa4da5c1x'.replace(/\w(?!\d)/g, '-')) // -a-d--a--a-c--
// 正向后顾 前面要有xx
const regexp1 = /(?<=\$)\d+/u
const str = 'shirt $463'
console.log(regexp1.exec(str)) // [ '463', index: 7, input: 'shirt $463', groups: undefined ]
// 负向后顾 前面不能有xx
const regexp2 = /(?<!\$)\d+/u 
console.log(regexp2.exec(str)) // [ '63', index: 8, input: 'shirt $463', groups: undefined ]