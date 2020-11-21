// var foo 
// console.log(foo) // undefined
// foo = 'bar'

// var foo = 'bar' // 会声明提升

// console.log(foo) // 报错
// let foo = 'bar' // 不会声明提升

// const foo = 'bar'
// foo = 123 // 导致console.log报错
// console.log(foo) 

// let example = 'Tom'
// // const foo = 'this is' + example
// const foo = `this is ${example}`
// console.log(foo)


// es6 新增的数组的方法
let arr = ['a', 'b', 'c']
// console.log(Object.keys(arr)) // [ '0', '1', '2' ]
let newArr = [...arr.keys()]
console.log(newArr) // [ 0, 1, 2 ]

let iter = arr.entries()
// console.log(iter)
for (let e of iter) {
    console.log(e)
    // [ 0, 'a' ]
    // [ 1, 'b' ]
    // [ 2, 'c' ]
}

let eArr = arr.values()
for (let e of eArr) {
    console.log(e) // a b c
}

// function test(fruit) {
//     if (fruit == 'apple' || fruit == 'srrawberry') {
//         console.log('red')
//     }
// }

// function test(fruit) {
//     const redFruits = ['apple', 'srrawberry', 'cherry']
//     if (redFruits.includes(fruit)) {
//         console.log('red')
//     }
// }

let people = [
    {name: '大白', age: 20},
    {name: '柯南', age: 18},
    {name: '哪吒', age: 16}
]
function findFriend(person) {
    return person.name === '大白'
}
console.log(people.find(findFriend))

let test = ['a', 'b', 'c']
function index(i) {
    return i == 'b'
}
console.log(test.findIndex(index))