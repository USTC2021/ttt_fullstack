[剑指 Offer 56 - II. 数组中数字出现的次数 II](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/)

- 读题
    number[] nums
    找出出现一次的数字
    return number 

- 解题
    1. 方法一：排序 + 查找
    - 先判断数组长度
    - 然后将数组进行排序
    - 遍历排序后的数组，判断该元素左右是否相等，若不相等则返回该元素

    2. 方法二：Map
    - 遍历数组，将元素统计个数存入map集合中
    - 遍历map集合，判断其value值是否为1，若为1，则将其赋值给number
    - 遍历结束后返回number

    3. 方法三：全库函数
    遍历数组，判断其第一个找到的下标与最后一个找到的小标是否相等，若相等，则返回该元素