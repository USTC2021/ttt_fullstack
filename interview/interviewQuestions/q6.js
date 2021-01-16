var END = Math.pow(2, 53)

var START = END - 100

var count = 0

for (var i = START; i <= END; i++)  {
  count++
}

console.log(count) // for循环无限执行

// 死循环
// js中 2 的 53 次方是最大的值
// END 等于 2 的 53 次方执行后再加1，此时结果还是 2 的 53 次方