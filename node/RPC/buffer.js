// const buffer1 = Buffer.from('dabai')
// const buffer2 = Buffer.from([1, 2, 3, 4])

// const buffer3 = Buffer.alloc(20)

// console.log(buffer1)
// console.log(buffer2)
// console.log(buffer3)

// /* 输出结果：
// <Buffer 64 61 62 61 69>
// <Buffer 01 02 03 04>   
// <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00> 
// */

// buffer2.writeInt8(12, 1)
// console.log(buffer2)
// /* <Buffer 01 0c 03 04> */

// buffer2.writeInt16BE(512, 2)
// console.log(buffer2)
// /* <Buffer 01 0c 02 00> */


const fs = require("fs");
const protobuf = require('protocol-buffers')
const schema = protobuf(fs.readFileSync(__dirname + '/buffer.proto'))
console.log(schema)
// Messages {
//   Clomn: {
//     type: 2,
//     message: true,
//     name: 'Clomn',
//     buffer: true,
//     encode: [Function: encode] { bytes: 0 },
//     decode: [Function: decode] { bytes: 0 },
//     encodingLength: [Function: encodingLength],
//     dependencies: [ [Object], [Object], [Object] ]
//   }
// }

// console.log(schema.Clomn.encode({
//   id: 1,
//   name: 'node.js',
//   price: 80.7
// }))
/* <Buffer 08 01 12 07 6e 6f 64 65 2e 6a 73 1d 66 66 a1 42> */

const buffer = schema.Clomn.encode({
  id: 1,
  name: 'node.js',
  price: 80.7
})
console.log(schema.Clomn.decode(buffer))
// { id: 1, name: 'node.js', price: 80.69999694824219 }  精度丢失
