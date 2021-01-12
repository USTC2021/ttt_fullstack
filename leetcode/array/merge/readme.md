[88. 合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)

- 读题
  给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
  number[] nums1
  number m
  number[] nums2
  number n
  return number[]
   
- 解题 
  1. 双指针
    - 定义一个指针指向nums1的末尾，一个指针指向nums2末尾
    - 遍历数组，判断nums1是否小于nums2，若不小于，则数组从末尾向前存储nums1指针所指的元素，存储的下标减1，nums1的指针减1，否则则存储nums2指针指向的元素，存储下标减1，nums2的指针减1
    - 遍历结束，若nums2中还存在元素，则依次放入数组首部

  2. 合并后排序
    - 先将nums2合并到nums1的末尾
    - 再对nums1进行降序排序