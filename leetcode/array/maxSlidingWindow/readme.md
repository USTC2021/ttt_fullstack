[剑指 Offer 59 - I. 滑动窗口的最大值](https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/)

- 读题
  number[] nums
  number k
  滑动窗口最大值
  return number[]
   
- 解题
  1. 方法一：库函数
    - 判断数组是否为空，若为空，则返回空数组
    - 遍历数组，截取k个元素，并将其降序排序，提取首个元素，存入结果数组中
    - 遍历结束，返回结果数组

  2. 方法二：优先队列