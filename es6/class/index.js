// class Foo {
//     // 防止被继承到
//     static bar() { 
//         this.baz()
//     }
//     static baz() { // 只属于Foo，私有属性
//         console.log('hello')
//     }
//     // baz() {
//     //     console.log('world')
//     // }
// }
// Foo.bar() // hello


// class Foo {
//     static bar() {
//         this.baz()
//     }
//     baz() { // 默认公有，不是只属于Foo
//         console.log('world')
//     }
// }
// Foo.bar() // 报错


// class Foo {
//     constructor() {

//     }
//     static bar() {
//         this.baz()
//     }
//     baz() { // 默认公有，不是只属于Foo
//         console.log('world')
//     }
// }
// let foo = new Foo()
// foo.baz() // world


class Shape {
    constructor(width, height) {
        this._width = width
        this._height = height
        // this.area = width * height
    }
    // area() {
        
    // }

    get area() {
        return this._width * this._height
    }
}

const square = new Shape(10, 10)
console.log(square._width)
// console.log(square.area)
// console.log(square.area())
console.log(square.area)