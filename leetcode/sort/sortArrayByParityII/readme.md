[922. 按奇偶排序数组 II](https://leetcode-cn.com/problems/sort-array-by-parity-ii/)

- 读题
    number[] A 奇偶各一半
    下标与值的奇偶性相同
    return number

- 解题 
    1. 方法一
    - 将数组A中的元素进行奇偶分类，分别存入一个数组中
    - 遍历A数组长度的一半，每次将奇数数组和偶数数组各取一个存入到结果数组中
    - 遍历结束后，返回结果数组