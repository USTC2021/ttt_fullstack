[7. 整数反转](https://leetcode-cn.com/problems/reverse-integer/)

- 读题
  number x
  整数每位上数字进行反转
  return number
   
- 解题
  1. 暴力法 + 库函数
    - 判断其值是否为0或-0或溢出
    - 将整数转换成数组
    - 判断其首元素是否为负
    - 去除尾部0
    - 将剩余数字反转
    - 将数组转成数字
    - 判断其是否溢出

  2. 方法二 转字符串翻转

  3. 方法三
    - 获取参数的绝对值并对绝对值进行取反
    - 判断参数是否小于0，小于0添加符号位
    - 判断是否益出