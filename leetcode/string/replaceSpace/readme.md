[剑指 Offer 05. 替换空格](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/)

- 读题
  string s
  将空格替换成%20
  return string
   
- 解题
  1. 暴力法 + 库函数
    - 遍历字符串，判断是否为空格，若是，替换成%20
    - 遍历结束后，返回字符串