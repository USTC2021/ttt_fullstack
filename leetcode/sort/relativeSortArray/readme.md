[1122. 数组的相对排序](https://leetcode-cn.com/problems/relative-sort-array/)

- 读题
    number[] arr1  number[] arr2
    arr2 元素各不相同 并存在arr1中
    对arr1进行排序  arr1与arr2相对顺序相同 未出现在arr2中的元素升序排在末尾
    return number

- 解题 
    1. 方法一
    - 循环遍历arr1数组，判断其是否存在，分别存入两个数组中，一个是存在的数组，一个是不存在的数组
    - 遍历结束后，先对不存在的数组进行排序
    - 然后对存在中的数据以map的键值对的形式对其个数统计
    - 接着根据arr2的顺序对map进行展开
    - 最后合并两个数组，并对其进行返回