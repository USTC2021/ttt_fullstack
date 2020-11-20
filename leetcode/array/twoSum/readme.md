[剑指 Offer 57. 和为s的两个数字](https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/)

- 读题
    number[] nums   number target
    递增数组 和s
    查找两数正好和为s  输出一对和为s
    return number[]

- 解题
    1. 双指针
    - 定义两个指针，一个指向首元素，一个指向末尾元素
    - 计算两指针指向元素的和
    - 若其和大于目标值，则右指针往左移一位
    - 若其和小于目标值，则左指针往右移一位
    - 若相等，则以数组的形式返回所指向的元素

    2. 暴力法 (超时)