// 什么是浅拷贝？如何实现一个浅拷贝？什么是深拷贝？如何实现一个深拷贝？

// let a = {
//     age: 1
// }
// let b = a
// a.age = 2
// console.log(b.age, a.age) // 2 2 


// let a = {
//     age: 1
// }
// a = {
//     age: 2
// }
// let b = a
// a.age = 2
// console.log(b.age, a.age) // 1 2 

// 深拷贝
// let a = {
//     age: 1
// }
// let b = JSON.parse(JSON.stringify(a))
// a.age = 2
// console.log(b.age, a.age) // 1 2 



// let a = {
//     age: 1,
//     info: {
//         name: 'wn'
//     }
// }
// let b = Object.assign({}, a)
// a.age = 2
// console.log(b.age, a.age) // 1 2 

// let c = {
//     age: 1
// }
// let d = {...c}
// c.age = 2
// console.log(d.age)

// let c = {
//     age: 1,
//     jobs: {
//         first: 'coding'
//     }
// }
// let d = {...c}
// c.jobs.first = 'waiter'
// console.log(d.jobs.first)

// 该方法深拷贝拷贝不出来undefined与symbol
// let c = {
//     age: 1,
//     jobs: {
//         first: 'coding'
//     }
// }
// let d = JSON.parse(JSON.stringify(C))
// c.jobs.first = 'waiter'
// console.log(d.jobs.first)


// let obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: 3
//     }
// }
// obj.c = obj.b
// obj.e = obj.a
// obj.b.c = obj.c
// obj.b.d = obj.b
// obj.b.e = obj.b.c
// let newObj = JSON.parse(JSON.stringify(obj))
// console.log(newObj)

// JSON.parse(JSON.stringify(test)) 缺陷
let test = {
    age: undefined,
    sex: Symbol('man'),
    job: function() {},
    name: 'wn'
}
let o = JSON.parse(JSON.stringify(test))
console.log(o) // {name: 'wn'}