[905. 按奇偶排序数组](https://leetcode-cn.com/problems/sort-array-by-parity/)

- 读题
    number[] A
    排序 所有偶数 + 所有奇数
    return number[]

- 解题 
    1. 方法一
    - 遍历数组，判断其奇偶，并分别存入数组中
    - 偶数数组合并奇数数组，并将其返回
    2. 方法二
    利用sort函数，将两两元素先进行按位与然后进行排序，并将其数组返回