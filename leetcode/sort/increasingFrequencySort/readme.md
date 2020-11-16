[1636. 按照频率将数组升序排序](https://leetcode-cn.com/problems/sort-array-by-increasing-frequency/)

- 读题
    number[] nums 
    按值的频率升序排序 若频率相同，则按值本身降序排序
    return number[]

- 解题 
    - 遍历数组，利用map集合统计值的频率
    - 遍历map，对频率进行升序排序，若频率相同，则对值进行降序排序
    - 将map转换成符合题意的数组
    - 返回数组