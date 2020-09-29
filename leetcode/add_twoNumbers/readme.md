![2.两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

- 读题
    l1 [((2 -> 4 -> 3))] l2[((5 -> 6 -> 4))]
    位数逆序存储 一个节点存一个数字(满十进一)
    listNode 

- 解题1
    1. 设置一个头结点node和一个增长节点cur
    2. 定义变量
        x: 链表l1当前节点
        y: 链表l2当前节点
        sum: x+y的值
        flag: sum/10
    3. 循环
        - l1和l2同时不为空
        - 计算 sum = x + y + flag
        - 计算 flag = parseInt(sum / 10)
        - cur创建一个新节点存储sum % 10
    4. 查看flag是否有非0的值，若有则才cur后创建一个新的节点
    5. 返回值为node.next 