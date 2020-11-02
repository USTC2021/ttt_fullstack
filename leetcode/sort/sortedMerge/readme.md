[面试题 10.01. 合并排序的数组](https://leetcode-cn.com/problems/sorted-merge-lcci/)

- 读题
    sorted  number[] A  A.length = m
    sorted  number[] B  B.length = n
    A.length == n + m
    B 并入 A sort
    return number[]

- 解题
    1. 方法一
        - 将数组B插入数组A的后面
        ```
        for (var i = m; i < A.length; i++) {
            A[i] = B[i - m]
        }
        ```
        - 给数组A进行排序
        ```
        A.sort(function (a, b) {
            return a - b
        })
        ```
        - 返回数组A