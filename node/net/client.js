const net  = require("net");

const socket = new net.Socket({})

socket.connect({
  host: '127.0.0.1',
  port: 4000
})

// 单工通信
// socket.write('hello world')

// 半双工通信
const lessonIds = [
  "136797",
  "136798",
  "136799",
  "136800",
  "136801",
  "136803",
  "136804",
  "136806",
  "136807",
  "136808",
  "136809",
  "141994",
  "143517",
  "143557",
  "143564",
  "143644",
  "146470",
  "146569",
  "146582"
]

// let buffer = Buffer.alloc(4)
let index = Math.floor(Math.random() * lessonIds.length)
// buffer.writeInt32BE(
//   lessonIds[index]
// )
// socket.write(buffer)
socket.write(encode(index))

// 接收到服务端往socket管道里面添加的内容
socket.on('data', (buffer) => {
  console.log(buffer.toString());

  // buffer = Buffer.alloc(4)
  index = Math.floor(Math.random() * lessonIds.length)
  // buffer.writeInt32BE(
  //   lessonIds[index]
  // )
  // socket.write(buffer)
  socket.write(encode(index))
})

// 编码Buffer数据流
function encode(index) {
  let buffer = Buffer.alloc(4)
  // index = Math.floor(Math.random() * lessonIds.length)
  buffer.writeInt32BE(
    lessonIds[index]
  )
  return buffer
}