[34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

- 读题
  给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。如果数组中不存在目标值 target，返回 [-1, -1]
  number[] nums
  number target
  return number[]
   
- 解题 
  1. 库函数
    - 利用库函数indexOf和lastIndexOf获取数组中是否存在target值，若存在则返回下标，若不存在则返回-1
    - 定义一个空数组，将获取的两个下标添加到数组中
    - 返回数组

  2. 暴力法
    - 判断数组长度是否为0，若为0，返回[-1, -1]
    - 定义一个新数组arr
    - 从前往后遍历数组，判断其是否与target相等，若相等，将其下标添加到arr中，并跳出循环
    - 若遍历的下标与数组长度相等，则往数组中添加-1
    - 从后往前遍历数组，若其元素与target值相等则将下标添加到arr中，并跳出循环
    - 若arr数组长度等于1时，往数组中添加一个-1
    - 返回数组arr

  3. 二分法查找