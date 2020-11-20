[剑指 Offer 15. 二进制中1的个数](https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/)

- 读题
    number n 二进制串形式
    二进制串中1的个数
    return number

- 解题
    1. 方法一
    - 先将数字n转换成二进制然后再转换成字符串
    - 遍历字符串，判断字符是否为1，统计其个数
    - 遍历结束，返回个数

    2. 方法二：正则表达式
    将数字n转换成二进制，然后获取数字1
    ```
    match(/1/g)
    ```

    3. 方法三：位运算