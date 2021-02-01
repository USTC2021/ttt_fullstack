var a = {}
var b = Object.prototype

[a.prototype === b, Object.getPrototypeOf(a) == b]

// a.prototype  =>  undefined
// 对象是没有prototype属性的
// [false, true]