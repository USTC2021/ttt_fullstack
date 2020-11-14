[1329. 将矩阵按对角线排序](https://leetcode-cn.com/problems/sort-the-matrix-diagonally/)

- 读题
    number[][] mat
    同一条对角线升序排序
    return number[][]

- 解题 
    1. 方法一：暴力法
        - 外两层循环找到矩阵中需要进行对比交换的元素，最内层循环通过进行比较并对其进行交换
        - 循环结束，返回数组