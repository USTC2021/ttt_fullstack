const queue = [] 
queue.push('a')
queue.push('b')
queue.push('c')
queue.push('d')

while(queue.length) {
  const top = queue[0]
  queue.shift()
}


// 链表 
// 链表中的数据单位名称叫结点 结点在内存中是可以离散的

// {
//   val: 1,
//   next: {
//     val: 2,
//     next:...
//   }
// }

function ListNode(val) {
  this.val = val
  this.next = null
}

const node = new ListNode(1)
node.next = new ListNode(2)
const node3 = new ListNode(3)
node3.next = node.next
node1.next = node3
// [1, 3, 2]
node.next = node3.next


// const arr = [1, 2, 3, 4]

const arr = ['haha', 1, {a: 1}] // 非连续的内存

// 数组与链表的区别
// 数组 连续的存储
// js 中的数组 一种类型才是连续的存储
// 链表 非连续的存储


let index = 10
let node = head
for (let i = 0; i < index && node; i++) {
  node = node.next
}