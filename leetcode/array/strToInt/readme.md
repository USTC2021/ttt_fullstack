[剑指 Offer 67. 把字符串转换成整数](https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/)

- 读题
   string str
   丢失头部空字符，找到第一个非空字符
   第一个非空字符为正或负号 连续数字组合
   第一个不是有效数字整数或空则返回0
   若超出范围则返回INT_MAX或INT_MIN
   return number

- 解题