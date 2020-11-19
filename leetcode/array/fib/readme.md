[剑指 Offer 10- I. 斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)

- 读题
    number n
    f(0) = 0 f(1) = 1
    f(n) = f(n - 1) + f(n - 2)
    return number
    注意：结果需求余 % (1e9 + 7)  实现一万项

- 解题
    1. 方法一：不递归
    - 定义num1 = 0，num2 = 1
    - 判断n是否为0，若为0，则返回num1
    - 判断n是否为1，若为1，则返回num2
    - 遍历n>1，其元素为num1 + num2的结果num，并将num2赋值给num1，num赋值给num
    - 遍历结束后返回num

    2. 方法二：递归

    3. 动态规划