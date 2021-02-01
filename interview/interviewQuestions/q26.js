"1 2 3".replace(/\d/g, parseInt)  // "1 NaN 3"

// 如果 replace 方法 第二个参数是函数，就会在匹配的时候多次调用
// 第一个参数是匹配的字符串，第二个匹配的字符串的下标
parseInt(1, 0) // 1
parseInt(2, 2) // NaN
parseInt(3, 4) // 3