[125. 验证回文串](https://leetcode-cn.com/problems/valid-palindrome/)

- 读题
    string s
    只考虑数字和字母
    return boolean

- 解题
    1. 方法一 validPalindrome.js
        - 两个下标从两侧向中间移动
        - 判断元素是否是数字或字母
        - 判断元素是否相等

    2. 方法二：全库函数 isPalindrome
        - 将字符串中非数字和字母进行替换
        - 将字符串转成小写
        - 将字符串转成数组
        - 将数组翻转
        - 将数组转换成字符串