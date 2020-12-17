// number.toExponential()

console.log(Math.PI.toExponential(15)) // 3.141592653589793e+0

// number.toFixed()
console.log(Math.PI.toFixed(15)) // 3.141592653589793

// number.toPrecision()
console.log(Math.PI.toPrecision(7)) // 3.141593

// number.toString()
console.log(Math.PI.toString(2)) // 11.001001000011111101101010100010001000010110100011



// object
// Object.hasOwnProperty()
let a = {
  member: true
}
// let b = Object.beget(a)
let t = a.hasOwnProperty('member') // true
// let u = b.hasOwnProperty('member') // false
// let v = b.member // true
// console.log(b, t, u, v)
console.log(a, t) // { member: true } true


// regexp.exec(string)
// let text = '<html><body bgcolor=linen><p>' + 'This is <b>bold<\/b>!<\/p><\/body><\/html>'
// let tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g
// while (tags.exec(text)) {
//   for (let i = 0; i < a.length; i++) {
//     console.log(('// [' + i + '] ' + a[i]).entityify())
//   }
// }