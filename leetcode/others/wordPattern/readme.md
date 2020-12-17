[290. 单词规律](https://leetcode-cn.com/problems/word-pattern/)

- 读题
  string pattern
  string s
  判断是否遵循相同规律
  return boolean
   
- 解题
  - 将字符串分割成单词数组
  - 判断其长度是否与规律长度相等，若不相等，则返回false
  - 遍历规律数组，判断单词数组查找当前单词的下标是否与规律数组查找当前规律标志的下标相等，若不相等，则返回false
  - 遍历结束，返回true