[leetcode1243 数组变换]()

- 读题
   number[] arr 
   首尾不改变
   一个元素小于它的左右邻居，那么该元素自增1
   一个元素大于它的左右邻居，那么该元素自减1
   数组不再发生变化，则返回数组

- 解题
   1. 方法：递归调用
   - 定义一个新的数组截取第一个元素
   - 遍历数组，判断元素是否是小于还是大于其左右邻居，若小于，则该元素加1，若大于，则该元素减1
   - 若新的数组与原数组相等，则返回新数组，否则则进行递归调用遍历数组