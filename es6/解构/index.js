// 数组，对象，字符串都能解构

// let a = 1
// let b = 2
// let c = 3

// let [a, b, c] = [1, 2, 3]

// let [a, [b, c]] = [1, [2, 3]]

// let [ , , c] = [1, 2, 3]
// console.log(c)

// ...arguements
// let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7]
// console.log(c)

// let [a, b, ...c] = [1]
// console.log(c)

// let [a] = false
// console.log(a)

// set
// let arr = [1, 2, 2, 3, 4, 4, 5, 6, 7]
// let newArr = new Set(arr)
// console.log(newArr)

// let [x, y, z] = {a: 'a', b: 'b', c: 'c'}

// let [x, y, z] = new Set(['a', 'b', 'c'])
// console.log(x)

// let [foo = true] = []
// console.log(foo)

// 解构允许指定默认值
// let [foo = true] = [false]
// console.log(foo)

// let [x, y = 'b'] = ['a']
// console.log(x, y)

// let [x, y = 'b'] = ['a', undefined]
// console.log(x, y) // a b

// let [x, y = 'b'] = ['a', null]
// console.log(x, y) // a null

// let {x, y} = {x: 'aaa', y: 'bbb'}
// console.log(x) // aaa

// let {y, x} = {x: 'aaa', y: 'bbb'}
// console.log(x) // aaa

// let {y, x, z} = {x: 'aaa', y: 'bbb'}
// console.log(z) // undefined

// let {log, sin, cos, abs} = Math
// console.log(abs(-2))

// const {log} = console
// log(123)

// let {foo: baz} = {foo: 'abc', bar: 'bbb'}
// console.log(baz)

let obj = {
    p: ['hello', {y: 'world'}]
}
let {p: [x, {y}]} = obj
console.log(x + y)

const [a, b, c, d, e] = 'hello'
console.log(c)