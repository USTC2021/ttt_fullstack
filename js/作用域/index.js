// function foo(a) {
//     console.log(a + b)
// }
// var b = 2
// foo(2)


// 三层作用域
// function foo(a) {
//     var b = a * 2
    
//     function bar(c) {
//         console.log(a, b, c)
//     }
//     bar(b * 3)
// }
// foo(2) // 2 4 12

// eval() 欺骗词法作用域
// function foo(str, a) {
//     eval(str) // var b = 3
//     console.log(a, b)
// }
// var b = 2
// foo('var b = 3', 1)

// with
// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// // obj.a = 2
// // obj.b = 3
// // obj.c = 4
// with (obj) {
//     a = 3,
//     b = 4,
//     c = 5
// }


// function foo(obj) {
//     with (obj) {
//         a = 2
//     }
// }
// var o1 = {
//     a: 3
// }
// var o2 = {
//     b = 3
// }
// foo(o1)
// foo(o2)
// console.log(o2.b)
// console.log(o2.a) // undefined
// console.log(a) // 2


// function foo(a) {
//     var b = 2
//     return function bar() {
//         console.log(4)
//     }
//     var c = 3
// }
// var test = foo()
// test()
// foo()()
// console.log(a, b, c)


// function doSomething(a) {
//     function doSomethingElse(c) {
//         return c - 1
//     }

//     b = a + doSomethingElse(a * 2)
//     console.log(b * 3)
// }

// doSomething(2)

// var a = 2
// var a = 3
// console.log(a)

// var a = 2
// function foo() {
//     var a = 3
//     console.log(a)
// }
// foo()
// console.log(a)

// var a = 2;
// (function foo() {
//     var a = 3
//     console.log(a)
// })()
// console.log(a)

// 块级作用域
// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log(i)

// var a = 1
// var a // 变量声明 声明提升
// a = 1

let a = 2
a = 3
console.log(a) // 3