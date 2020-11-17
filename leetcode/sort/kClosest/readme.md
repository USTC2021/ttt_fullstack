[973. 最接近原点的 K 个点](https://leetcode-cn.com/problems/k-closest-points-to-origin/)

- 读题
    number[][] points
    找到k个距原点最近的点
    return number[][]

- 解题 
    1. 方法一：暴力法
    - 遍历计算每个点距原点的距离，并将其存储到map集合中
    - 对map集合以value值进行升序排序
    - 将排序好的集合的key值存入数组中
    - 删除第k个点后的元素，获取k个点
    - 返回删除后的数组

    2. 方法二：排序 + 数学公式 + 截取函数
        ```
        points.sort  Math.pow(a[0], 2) points.splice(0, k)
        ```

    3. 方法三：快速排序
    