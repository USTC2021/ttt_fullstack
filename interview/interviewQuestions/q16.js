// arguments

function sidEffecting(ary) {
  // console.log(ary)
  ary[0] = ary[2]
}

function bar(a, b, c) {
  c = 10
  sidEffecting(arguments) // arguments: [Arguments] { '0': 1, '1': 1, '2': 10 }
  return a + b + c
}

console.log(bar(1, 1, 1)) // 21

// 参数变量和arguments是双向绑定的