[剑指 Offer 58 - I. 翻转单词顺序](https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/)

- 读题
    string s
    翻转单词，但单词内字符不变

- 解题
    1. 全库函数 + 正则表达式
        - 首先去除字符串的首尾空格
        ```
        s.replace(/^\s+|\s+$/g, '')
        或 s.trim()
        ```
        - 然后将字符串以空格进行分割存储在数组中
        ```
        arr.split(/[ ]+/)
        或 arr.split(/\s+/)
        ```
        - 翻转单词，但不反转单词中的字符
        ```
        result.reverse()
        ```
        - 将数组转换成字符串
        ```
        resultArr.join(' ')
        ```