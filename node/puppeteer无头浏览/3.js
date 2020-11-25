// 链表翻转
let list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {

            }
        }
    }
}
// 快手面试题
function reverseList(head) {
    // 1 2 3 
    // 循环一下
    let p = head 
    let pre = null 
    while(p) {
        let next = p.next
        // 本次循环 修改指向
        p.next = pre
        // 上面next修改完毕 走到下一个 修改下一个
        pre = p
        p = next
    }
    return pre
}