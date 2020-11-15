[1387. 将整数按权重排序](https://leetcode-cn.com/problems/sort-integers-by-the-power-value/)

- 读题
    number li hi k
    [li, hi] 整数 按权重升序 权重相同，按值升序
    奇数x  x = x / 2
    偶数x  x = 3 * x + 1
    return number (第k个数)

- 解题 
    - 遍历获取每一个整数及其权重
    - 将获取的整数及权重存入map集合中
    - 遍历结束，将map集合以value值进行排序
    - 将排序的map中的key值存入数组中
    - 返回下标为k-1的数组元素