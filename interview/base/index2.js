// 1 == '1'
// 1. 两者类型是否相同，相同的话就比大小
// 2. 类型不同，那么就进行类型转换
// 3. 会先判断是否在对比null和undefined，是的话就会回true
// 4. 判断两者是否是string或number，是的话就将string转为number
// 5. 判断其中一方是否为Boolean值，是的话就把Boolean转为number
// 6. 判断其中一方是否为object，且另一方为string或number或symbol，是的话就把object转为原始类型进行判断

// '1' == true
// '1' == {name: ok} // false
// '1' == 1
// 1 == 1
// [] == [] // false
// [] == ![] // true


// [] == ![]
// 右边优先级更高，先转换成Boolean值
// js类型转换会导致
// [] == !true
// [] == false
// [] == 0
// '' == 0
// 0 == 0

// [] == []
// 引用类型是判断指针是否相同