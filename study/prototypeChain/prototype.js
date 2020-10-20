// 原型和原型链实例

// 构造函数
function Person () {

}
Person.prototype.type = "object named Person"

var person = new Person() // 实例化
var res = person instanceof Person // 检查person是否为Person的实例
console.log(res) // true

// 实例继承构造函数的属性
var type = person.type 
console.log(type) // object named Person

console.log(person.__proto__ === Person.prototype) // true

console.log(Person.prototype.constructor === Person) //true

// 实例访问构造函数
console.log(person.__proto__.constructor === Person) // true

function People () {

}
People.prototype = new Person()

var p = new People()
// p实例同属于Object，Person，People
console.log(p instanceof Object, p instanceof Person, p instanceof People) // true true true
// p的类型
console.log(p.type) // object named Person

// 原型链
// p.__proto__ === People.prototype
// console.log(People.prototype) // Person {}
console.log(p.__proto__) // Person {} 
console.log(p.__proto__.__proto__) // Person { type: 'object named Person' }
console.log(p.__proto__.__proto__.__proto__) // {}
console.log(p.__proto__.__proto__.__proto__.__proto__) // null