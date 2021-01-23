var a = [0]
if ([0]) {
  console.log(a == true)
} else {
  console.log('hello')
}
// false

// 隐式转换规则
// [0] == true
// [0] == 1
// '0' == 1
// 0 == 1
// false

// [] == [] ? 
// false
// 引用类型，内存地址不一致