[4. 寻找两个正序数组的中位数](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/)

- 读题
  number[] nums1
  number[] nums2
  返回两个正序数组的中位数
  return number
   
- 解题
  1. 合并排序
    - 合并两数组，并对其进行排序
    - 判断合并后数组的长度是奇数还是偶数，若是奇数，则中间那个元素就是中位数，若为偶数，则中间两数的平均值是中位数