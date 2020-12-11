[剑指 Offer 29. 顺时针打印矩阵](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)

- 读题
  number [][] matrix
  从外向里顺时针打印数字
  return number[]
   
- 解题
  - 设置变量
    1. startX: 走到的元素横坐标
    2. startY: 走到的元素纵坐标
    3. col: 矩阵行数
    4. row: 矩阵列数
    5. direct：走向
    6. result：结果数组
  - 设置走向字面量
    1. top: 向→走 direct = 'right' startY++
    2. right: 向↓走 direct = 'bottom' row--
    3. bottom: 向←走 direct = 'left' col--
    4. left: 向↑走 direct = 'top' startX++
  - 判断矩阵是否为空，若为空，则返回空数组
  - 遍历矩阵，调用走向字面量
  - 返回结果数组