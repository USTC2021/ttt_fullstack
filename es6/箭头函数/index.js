// 箭头函数没有this

// 未加花括号 自动return
// let foo = {
//     value: 1,
//     getValue: () => console.log(this.value) // this 无法保存像function一样的对象，指向的windows(默认绑定)
// }

// foo.getValue() // undefined

// 在箭头函数中使用call bind apply也不能拿到this
// foo.getValue.call(foo) // undefined

// 在箭头函数中要想拿到this，可以不使用this获取
// let foo = {
//     value: 1,
//     getValue: () => console.log(foo.value) }

// foo.getValue() // 1

// let foo = {
//     value: 1,
//     getValue: function() {
//         console.log(this.value) // this作用域指向foo
//     }
// }

// foo.getValue() // 1



function Foo() {
    this.value = 1
}

// 输出undefined
Foo.prototype.getValue = () => console.log(this.value)

// 输出1
// Foo.prototype.getValue = function() {
//     console.log(this.value)
// }
let foo = new Foo()

// function
// {
//     value: 1,
//     getValue: function () {
//         console.log(this.value)
//     }
// }

// 箭头函数
// foo = {
//     value: 1,
//     getValue: () => {
//         console.log(this.value)
//     }
// }
foo.getValue()