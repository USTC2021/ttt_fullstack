function showCase(value) {
  switch (value) { // switch 内部使用严格模式 === 进行判断
    case 'A':
      console.log('Case A')
      break
    case 'B':
      console.log('Case B')
      break
    case 'C':
      console.log('Case C')
      break
    case undefined:
      console.log('undefined')
      break
    default:
      console.log('Do not know!')
  }
}

showCase(new String('A'))
// Do not know!

showCase(String('A'))
// Case A

// new String('A') => 得到的是对象 {'A'}