[剑指 Offer 50. 第一个只出现一次的字符](https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/)

- 读题
   string s 
   第一次只出现一次的字符
   若不存在，返回单空格
   return character
   
- 解题
   1. 方法一: map
      - 判断字符串是否为空，若为空，则返回单空格
      - 将字符串的字符以其个数存入map中
      - 遍历map集合，若其值为1，则返回其键
      - 遍历结束，返回单空格
   
   2. 方法二: indexOf lastIndexOf
      - 遍历字符串，若字符串从前查找的下标和从后查找的下标相等，那么返回该字符
      - 遍历结束，返回单空格