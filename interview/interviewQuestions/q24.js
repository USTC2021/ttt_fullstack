function f() {}
var a = f.prototype
var b = Object.getPrototypeOf(f)

// a === b // false

function Person() {}
var p = new Person()
var a = p.__proto__
var b = Object.getPrototypeOf(p)
var c = Person.prototype
//  Object.getPrototypeOf(p) === Person.prototype
//  Object.getPrototypeOf(Person) === Function.prototype
console.log(a === b, a === c, b === c) // true true true
var d = Person.__proto__ // 谁把我造出来的 Function
var e = Object.getPrototypeOf(Person)
var h = Function.prototype
console.log(d === e, e === h, d === h) // true true true