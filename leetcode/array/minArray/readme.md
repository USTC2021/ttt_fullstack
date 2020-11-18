[剑指 Offer 11. 旋转数组的最小数字](https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/)

- 读题
    number[] numbers
    旋转数组的最小元素
    return number

- 解题
    1. 方法一
    遍历数组，判断该元素是否比其后一个元素大，若是，则返回该元素

    2. 方法二：排序
    对数组进行升序排序，返回第一个元素

    3. 方法三：二分查找