[剑指 Offer 39. 数组中出现次数超过一半的数字](https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/)

- 读题
    number[] nums
    找到出现次数超过数组长度一半的数字
    return number

- 解题
    1. 方法一：双指针
    - 判断数组长度是否为1，若为1，则返回该元素
    - 将数组进行排序
    - 遍历排序后的数组，若左右指针的元素相等，则右指针往后移，直至元素不等，计算其个数，若个数大于长度一半，则返回该元素，若小于，则将左指针指向右指针，右指针往后移，反复上述操作

    2. 方法二：map
    - 遍历数组，将元素及其个数存入map集合中
    - 遍历map集合，判断value值是否超过数组长度一半，若超过则返回该元素