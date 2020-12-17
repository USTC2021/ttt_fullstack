// 方法

// array.concat()
let a = ['a', 'b', 'c']
let b = ['x', 'y', 'z']
let c = a.concat(b, true)
// console.log(c) // ['a',  'b', 'c', 'x',  'y', 'z', true]

// array.join()
a.push('d')
let d = a.join('')
// console.log(d) // abcd

// array.pop()
let e = a.pop()
// console.log(a, e) // [ 'a', 'b', 'c' ] d

// array.push()
let f = a.push(b, true)
// console.log(f, a) // 5 [ 'a', 'b', 'c', [ 'x', 'y', 'z' ], true ]

// array.reverse()
let g = a.reverse()
// console.log(a, g) // [ true, [ 'x', 'y', 'z' ], 'c', 'b', 'a' ] [ true, [ 'x', 'y', 'z' ], 'c', 'b', 'a' ]

// array.shift()
let h = a.shift()
// console.log(h, g) // true [ [ 'x', 'y', 'z' ], 'c', 'b', 'a' ]

// array.slice()
let j = a.slice(0, 1)
let k = a.slice(1)
let l = a.slice(1, 2)
// console.log(j, k, l, a) //[ [ 'x', 'y', 'z' ] ] [ 'c', 'b', 'a' ] [ 'c' ] [ [ 'x', 'y', 'z' ], 'c', 'b', 'a' ]

// array.splice()
let m = a.splice(1, 1, 'qwer', 'tyuiio')
// console.log(m, a) // [ 'c' ] [ [ 'x', 'y', 'z' ], 'qwer', 'tyuiio', 'b', 'a' ]

// array.unshift()
let n = a.unshift('?', '@')
// console.log(n, a) // 7 [ '?', '@', [ 'x', 'y', 'z' ], 'qwer', 'tyuiio', 'b', 'a' ]