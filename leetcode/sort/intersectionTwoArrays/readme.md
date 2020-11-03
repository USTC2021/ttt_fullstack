[349. 两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

- 读题
    number[] nums1
    number[] nums2
    计算nums1和nums2交集
    return number[]

- 解题
    1. 方法一：暴力
        - 双重循环遍历nums1和nums2，比较其元素是否相等
        - 若相等，则判断其交集数组中是否存在该元素，若存在则跳出内循环，否则则存入交集数组
        ```
        if (nums1[i] == nums2[j]) {
            // 判断是否已存在
            if(result.indexOf(nums1[i]) == -1){
                result[k++] = nums1[i]
            }
            break
        }
        ```
    2. 方法二
        数组nums1中元素依次在数组nums2中查询相同的元素，并查询是否已经存在于交集数组中
        ```
        if (nums2.indexOf(nums1[i]) != -1) {
            // 查找是否已经储存
            if(result.indexOf(nums1[i]) == -1){
                result[k++] = nums1[i]
            }
        }
        ```
    3. 方法三：全库函数
        使用new Set()先去重，然后判断是否存在交集
        ```
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
        return [...new Set(nums1)].filter(item => nums2.includes(item))
        ```