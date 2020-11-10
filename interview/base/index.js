let key1 = 1
let key2 = 1

console.log(key1 === key2) // true

console.log(typeof(null)) // Object

// 其实定义的是字符串对象，所以可以打印出length
console.log('hello'.length)

// 精度丢失
0.1 + 0.2 == 0.3

let obj = {
    name: 'wn'
}

const a = []  // #001
const b = a
b.push(1)
console.log(a)


function test(person) {
    person.age = 26
    // 重新开辟地址
    person = {
        name: 'yyy',
        age: 30
    }
    return person
}
const p1 = {
    name: 'xxx',
    age: 25
}
const p2 = test(p1)
console.log(p1) // xxx 26
console.log(p2) // yyy 30
// 1. 函数传参是传递对象指针的副本
// 2. p1 和 person 具有相同的指针，person被修改，p1也会被修改
// person 拥有了一个新的内存地址


// typeof
console.log(typeof(1))
console.log(typeof('abc'))
console.log(typeof(undefined))
console.log(typeof(null))
console.log(typeof(true))
console.log(typeof({}))
console.log([] instanceof Array)


// 让 instanceof 也能判断原始类型
class PrimitiveString {
    // Symbol.hasInstancer让我们来自定义instanceof行为
    static [Symbol.hasInstance] (x) {
        return typeof x === 'string'
    }
}

console.log('hello' instanceof PrimitiveString)