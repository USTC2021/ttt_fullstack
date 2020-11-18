[面试题4. 二维数组中的查找](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

- 读题
    number[][] matrix
    number target 
    判断是否含有target
    return boolean

- 解题
    1. 方法一：全库函数
    先将二维数组转成一维数组，然后查找数组中是否存在该元素

    2. 方法二：暴力法
    双重循环遍历数组，判断元素是否与target相等，若相等则返回true，否则则返回false

    3. 方法三
    - 判断数组长度是否为0，若为0，则返回false
    - 若数组存在，则遍历，判断其元素是否大于target，若大于target，则列数-1，若小于target，则行数+1，若相等，则返回true
    - 遍历结束，返回false

    4. 方法四：二分法查找
