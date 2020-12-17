# javaScript语言精粹 
# 第八章 方法  

- Array  (code - 3.js)
  1. array.concat() 返回一个新数组 浅复制 尾部添加
  2. array.join() 元素连接
  3. array.pop() 移除array中最后一个元素并返回该元素
  4. array.push() 尾部添加元素
  5. array.reverse() 反转
  6. array.shift() 移除数组中第一个元素并返回该元素 若为空，返回undefined
  7. array.slice() 浅复制 从array[start]复制到array[end]
  8. array.sort() 对array的内容进行适当排序，不能正确给一组数字排序
  9. array.splice() 移除元素，并用新的目标值替换它们 返回一个包含被移除元素的数组
  10. array.unshift() 在开始部分插入元素，返回数组新的长度

- Function (code - 4.js)
  1. function.apply(thisArg, argArray)
    - 传递一个将被绑定到this上的对象和一个可选的参数数组
    - apply 方法被用在apply调用模式中

- Number  (code - 5.js)
  1. number.toExponential()  转换成一个指数形式的字符串  括号内值在0-20之间，控制小数位数
  2. number.toFixed() 转换成一个十进制数形式的字符串 括号内值在0-20之间，默认为0，控制小数位数
  3. number.toPrecision() 转换成一个十进制数形式的字符串 括号内值在0-21之间，控制有效位数
  4. number.toString() 转换成字符串 括号内的值2-36之间，控制基数

- Object  (code - 5.js)
  1. Object.hasOwnProperty()
    - 若Object包含name属性，那么返回true
    - 对name不起作用时返回false
  2. regexp.exec(string)
    - 若成功匹配regexp和string，返回一个数组，数组中下标为0的元素包含正则表达式regexp匹配的子字符串
    - 若失败，返回null
    - regexp带有g标志，查找从regexp.lastIndex位置开始，匹配成功，regexp.lastIndex被设置为匹配后的第一个字符的位置，匹配不成功，regexp.lastIndex为0
  3. regexp.test(string)
    - 若regexp匹配string，返回true，否则，返回false，不使用g标识

- String
  1. string.charAt(pos) 返回string中pos位置的字符，字符串长度为0，返回空字符串
  2. String.charCodeAt(pos) 以整数形式表示在string中pos位置的字符的字符码位
  3. string.concat() 连接字符串
  4. string.indexOf() 从首位开始查询
  5. string.lastIndexOf() 从末尾开始查询
  6. string.localeCompare() 比较两个字符串
  7. string.match(regexp) 匹配一个字符串和一个正则表达式
  8. string.replace() 查找和替换，返回新的字符串 一处地方
  9. string.search(regexp) 与indexOf方法类似
  10. string.slice(start, end) 复制部分 若start, end为负数，则与string.length相加
  11. string.split() 分割片段成数组
  12. string.substring(start, end) 不能处理负数参数，与slice方法一样
  13. string.toLocaleLowerCase() 转小写 使用本地化规则
  14. string.toLocaleUpperCase() 转大写 使用本地化规则
  15. string.toLowerCase() 转小写 
  16. string.toUpperCase() 转大写
  17. string.fromCharCode() 从一串数字中返回一个字符串 