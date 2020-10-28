[面试题 10.09. 排序矩阵查找](https://leetcode-cn.com/problems/sorted-matrix-search-lcci/)

- 读题
    number[][] matrix  row-sorted column-sorted
    number target
    return boolean

- 解题
    1. 暴力
    - 双重循环遍历二维数组每个元素，若找到第一个与target值相等的元素则返回true
    - 遍历结束，未找到与target值相等的元素返回false

    2. 函数使用
    - 循环遍历每一行，然后查找每一行中是否有与target值相等的元素，若存在，则返回true
        find = matrix[i].indexOf(target)
    - 遍历结束后，未找到与target值相等的元素返回false

    3. 从右上角开始查找
    - 首先计算数组长度，若数组长度小于1，则返回false
    - 然后获取右上角元素的下标
    - 一层遍历数组，若当前元素与target值相等时，则返回true，若当前元素大于target值则向左移一位，否则则向下移一位
    - 遍历结束后，未找到与target值相等的元素返回false

    4. 二分查找

## 注意
    - 数组长度范围 若长度过长，无法使用arr.reduce()方法
    - 使用arr.reduce()方法的前提是数组不能为空
    - 千万千万要注意多种情形