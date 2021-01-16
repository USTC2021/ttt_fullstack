// parseInt  map

// q1：['1', '2', '3'].map(parseInt) // 输出结果？

console.log(['1', '2', '3'].map(parseInt)) // [ 1, NaN, NaN ]
// parseInt(string, radix) 解析一个字符串并返回指定基数的十进制整数
// radix是2-36之间的整数，表示被解析字符串的基数
// 遇到非常字符返回NaN

// map => item, index, arr
parseInt('1', 0) // 0进制 当作 十进制    1
parseInt('2', 1) // 没有1进制            NaN
parseInt('3', 2) // 2进制的'3' 非法字符  NaN