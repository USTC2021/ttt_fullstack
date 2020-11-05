var num = 123
// var num = new Number(123).toString()
Number.prototype.toString = function() {
    return 'haha'
}
num.toString() // '123'

// Number.prototype.__proto__ = Object.prototype

var str = 'hello'  // new String('hello')
console.log(str.length)


// 方法重写
Object.prototype.toString = function() {}

Person.prototype.toString = function() {
    return 'haha'
}
function Person() {

}
var person = new Person()
console.log(person.toString())