[33. 搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)

- 读题
    number[] nums
    number target
    在数组nums中寻找target值
    return number

- 解题  
    - 方法一: 全库函数
        一行代码解决 返回 nums.indexOf(target) 的结果即可

    - 方法二：暴力法
        遍历数组，查找target值，若存在则返回下标，若不存在则返回-1

    - 方法三：二分法