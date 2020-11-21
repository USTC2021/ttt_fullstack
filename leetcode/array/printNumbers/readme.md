[剑指 Offer 17. 打印从1到最大的n位数](https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/)

- 读题
   number n
   打印1~最大的n位十进制数
   return number[]

- 解题
    1. 方法一
    - 利用Math.pow算出比最大十进制数大1的数num
    - 遍历num，并将其存入一个空数组中
    - 返回数组