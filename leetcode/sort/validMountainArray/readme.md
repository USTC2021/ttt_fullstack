[941. 有效的山脉数组](https://leetcode-cn.com/problems/valid-mountain-array/)

- 读题
    number[] A
    A.length >= 3
    A[0] < A[1] < ... < A[i]
    A[i] > A[i+1] > ... > A[A.length - 1]
    return boolean

- 解题
    - 判断数组长度是否大于等于3
    - 查询数组中最大值及其下标
    - 判断数组首元素或尾元素是否为最大值，若是最大值，则返回false
    - 分最大值左边与右边元素依次比较
        最大值左边，元素左边大于等于元素右边，则返回false
        最大值右边，元素左边小于等于元素右边，则返回false
    - 循环结束返回true