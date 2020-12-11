// 给array增加一个方法 reduce方法 接收一个函数f和一个初始值value
Array.method('reduce', function (f, value) {
  for (let i = 0; i < this.length; i++) {
    value = f(this[i], value)
  }
  return value
})

let data = [4, 8, 15, 16, 23, 42]

let add = function (a, b) {
  return a + b
}

let mult = function (a, b) {
  return a * b
}

let sum = data.reduce(add, 0) // 100
let product = data.reduce(mult, 1) // 7418880

data.total = function () {
  return this.reduce(add, 0)
}

total = data.total() // 108

console.log(sum, product, total)