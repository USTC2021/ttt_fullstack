/**
 * leetcode2 两数相加
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 * @return {ListNode}
 */
const addTwoNumbers = function(l1,l2){
    let node = new ListNode(0); // 创建一个头结点
    let cur = node; // 默认当前节点为头结点
    let x, // l1当前节点
        y, // l2当前节点
        sum, // x+y 的值
        flag = 0; // sum/10的值
    // 循环
    while(l1 != null || l2 != null){
        x = (l1 != null) ? l1.val : 0; // 判断l1是否为空，并获取当前值
        y = (l2 != null) ? l2.val : 0; // 判断l2是否为空，并获取当前值
        sum = x + y + flag;
        flag = parseInt(sum / 10); // parseInt()函数 解析一个字符串，返回一个整数。
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if(l1 != null){
            l1 = l1.next;
        }
        if(l2 != null){
            l2 = l2.next;
        }
    }
    if(flag != 0){
        cur.next = new ListNode(flag);
    }
    return node.next;
}