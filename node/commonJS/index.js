// console.log('start require')
// console.log(require("./lib"))
// console.log('end require')

let lib = require("./lib")
console.log(lib)

lib.name = 'wn'

exports导出的应用跟index.js里面的lib是同一个引用