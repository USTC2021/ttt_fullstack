[剑指 Offer 44. 数字序列中某一位的数字](https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/)

- 读题
    数字012345678910...
    number n
    return number

- 解题  
    1. 方法一
        - 首先判断第n位是否小于10，若是则返回0
        - 若n>=10则判断其所在位置位于几位数
        - 然后找到第n位数是属于数字几里面的
        - 将该数字转换成数组，获取第n位的数字