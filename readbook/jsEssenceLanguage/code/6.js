// string

// string.charAt()
let username = 'Mike'
let initial = username.charAt(0)
// console.log(initial) // M

// string.charCodeAt()
initial = username.charCodeAt(0)
// console.log(initial) // 77

// string.concat()
let s = 'c'.concat('a', 't')
// console.log(s) // cat

// string.localeCompare()
let m = ['aaa', 'a', 'AA', 'AAA', 'Aa', 'A']
let n = m.sort(function (a, b) {
  return a.localeCompare(b)
})
// console.log(n) // [ 'a', 'A', 'Aa', 'AA', 'aaa', 'AAA' ]

// string.replace()
let result = 'month_in_law'.replace('_', '-')
// console.log(result) // month-in_law

let text = 'and in it he says "Any damn fool could'
let pos = text.search(/["']/)
// console.log(pos) // 18

let a = text.slice(18)
let b = text.slice(0, 3)
let c = text.slice(-5)
// console.log('a:', a, 'b:', b, 'c:', c) // a: "Any damn fool could b: and c: could

let digits = '0123456789'
let q = digits.split('', 5)
// console.log(q) // [ '0', '1', '2', '3', '456789' ]

// String.fromCharCode()
let aaa = String.fromCharCode(67, 97, 116)
// console.log(aaa) // Cat