Person.prototype.lastname = 'Liu'

function Person(name) {
    this.name = name
}

var person = new Person('qi')
console.log(person.lastname)

// 原型上的属性是不能被实例更改的
// person.lastname = 'Wang' // 没有改动原型属性，只是在自己的对象中添加了lastname属性
// // 原型上的属性可以通过原型修改
// person.prototype.lastname = 'Wang'
// console.log(person.lastname)
// console.log(person)

// delete person.lastname
// console.log(person.lastname)


// 构造函数原型上本身就存在一个constructor属性，构造器指向构造函数
// function Bus() {

// }

// Car.prototype = {
//     constructor: Bus
// }

function Car() {

}
var car = new Car()
// console.log(car.constructor) // function Bus() {}
console.log(car.constructor) // function Car() {}

// constructor 指向的是Car()，目的是让Car() 构造出来的对象想要找到自己的来历时能找到
// car.constructor