[1030. 距离顺序排列矩阵单元格](https://leetcode-cn.com/problems/matrix-cells-in-distance-order/)

- 读题
    number R, C, r0, c0
    按距(r0, c0)的距离从最小到最大排序
    return number[][]

- 解题
    1. 方法一
    - 获取每个单元格坐标，计算其距(r0, c0)的距离，并将其存入map集合中
    - 将map集合按照value值进行排序
    - 将排序好的map中key值提取到数组中
    - 返回数组

    2. 方法二
    - 获取单元格坐标，计算其距(r0, c0)的距离，并将其以数组的形式存入数组中
    - 将存入的数据以其距离进行排序
    - 将排序好的数组中的每项元素提取前两项并将其进行返回

    3. 方法三：桶排序