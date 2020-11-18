[LCP 18. 早餐组合](https://leetcode-cn.com/problems/2vYnGI/)

- 读题
    number[] staple
    number[] drinks
    number x
    staple[i] + drinks[j] <= x 方案
    return number

- 解题
    1. 方法一：双指针 i = 0   j = drink.length - 1 
    - 将两数组均进行升序排序
    - 数组遍历，判断staple[i]是否大于x，若是则i++
    - 判断staple[i] + drinks[j] > x，若是，则j--
    - 判断staple[i] + drinks[j] <= x，若是，计算符合该种主食的方案，i++
    - 最后对其进行取模，返回取模后的结果

    2. 方法二：二分查找