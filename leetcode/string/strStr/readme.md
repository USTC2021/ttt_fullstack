[28. 实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/)

- 读题
  给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 -1。
  string haystack
  string needle
  return number
   
- 解题 
  1. 遍历数组 + 库函数
    - 获取字符串needle长度len
    - 遍历字符串haystack，截取len长度的字符串tmp，将其与needle字符串进行比较，若相等，则返回该遍历时的下标
    - 遍历结束后，返回-1

  2. 暴力法
    - 获取字符串needle长度len
    - 外层遍历字符串haystack，定义一个指针k，内层遍历needle，依次判断元素是否相等，若相等，比较下一个元素，若不相等，跳出内层循环，跳出内层循环后，判断k是否与len相等，若相等，返回该下标
    - 外层循环结束后，返回-1

  3. 库函数