// 1、请在不影响原调用的情况下简化下列方法
// function func1(c) {
//  const a = 1
//  const b = 2

//  const d = a * b * c

//  return a + b + c + d
// }

// function func2(c) {
//  const a = 1
//  const b = 2

//  const d = a + b + c

//  return a + b + c + d
// }

// function func3(c) {
//  const a = 1
//  const b = 2

//  const d = a - b + c

//  return a + b + c + d
// }

// function func4(c) {
//  const a = 1
//  const b = 2

//  const d = a + b - c

//  return a + b + c + d
// }

// 写法
// function func (c, fn) {
//   const a = 1
//   const b = 2

//   const d = fn

//   return a + b + c + d
// }

// function func1(a, b, c) {
//   return a * b * c
// }

// function func2(a, b, c) {
//   return a + b + c
// }

// function func3(a, b, c) {
//   return a - b + c
// }

// function func4(a, b, c) {
//   return a * b - c
// }

// func(c, func1)

// 简化 构造出 func1 ~ func4 四个 功能一模一样的函数
// 高阶函数
// 体现函数式编程过程抽象的特点
function simplify (fn) {
  const a = 1
  const b = 2
  return function (c) {
    const d = fn(a, b, c)
    return a + b + c + d
  }
}

const f1 = simplify((a, b, c) => a * b * c)
const f1 = simplify((a, b, c) => a + b + c)
const f1 = simplify((a, b, c) => a - b + c)
const f1 = simplify((a, b, c) => a + b - c)
console.log(f1(4) === func1(4))