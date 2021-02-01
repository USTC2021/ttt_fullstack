// let a = 3
// console.log(a.toString())
// console.log(a..toString())
// console.log(a...toString())

// 数字后接点会被js引擎优先认作是小数
// 3.toString()  =>  (3.)toString
// 3..toString()  =>  (3.).toString
// 3...toString()  =>  (3.)..toString

// error  "3"  "error"