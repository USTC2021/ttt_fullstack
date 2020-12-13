[217. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)

- 读题
  number[] nums
  有无重复数字
  return boolean
   
- 解题
  1. 方法一
    - 对数组进行升序排序
    - 遍历数组，判断是否存在重复数字

  2. 方法二：库函数
    - 遍历数组，判断前后查找结果是否相等，若不相等，则返回true

  3. 方法三：set

  4. 方法四：map