[剑指 Offer 45. 把数组排成最小的数](https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/)

- 读题
    number[] nums
    nums中所有数字拼成一个最小数
    return string

- 解题
    1. 全库函数 minNumber.js
        首先对数组元素进行排列，然后将其转换成数字
        ```
        nums.sort((a, b) => {
            return (''+a+b) - (''+b+a)
        }).join('')
        ```
    2. 冒泡排序 minNum.js
        - 先通过双重循环进行冒泡排序，判断两元素连接时的大小，并对其进行交换
        - 循环结束后将数组转换成数字