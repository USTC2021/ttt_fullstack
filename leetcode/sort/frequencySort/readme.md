[451. 根据字符出现频率排序](https://leetcode-cn.com/problems/sort-characters-by-frequency/)

- 读题
    string s
    按字符频率降序排列

- 解题 
    - 将字符串中的字符以键值对的形式存入map集合中
        key 字符  value 字符个数
    - 将map中的键值对以value进行排序
    - 按照每个字符的个数对其key进行字符串的连接
    - 返回字符串