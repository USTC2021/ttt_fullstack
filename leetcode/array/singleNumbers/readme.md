[剑指 Offer 56 - I. 数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)

- 读题
    number[] nums
    找出两个出现一次的数字
    return number[]

- 解题
    1. 方法一
    - 将数组进行升序排序
    - 判断该元素前后是否与其相等，若不相等，则将该元素存入数组中
    - 返回数组

    2. 方法二：Map
    - 遍历数组，将元素统计个数存入map中
    - 遍历map，判断其value值是否为1，若为1，则将该元素存入数组中
    - 返回数组

    3. 二分查找