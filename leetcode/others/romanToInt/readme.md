[13. 罗马数字转整数](https://leetcode-cn.com/problems/roman-to-integer/)

- 读题
  string s
  罗马数字转整数
  return number
   
- 解题
  1. Map
    - 将罗马数字的种类存入map中
    - 遍历罗马字符串，判断其是两个字符情况还是一个字符情况
    - 返回遍历结束后累加的结果