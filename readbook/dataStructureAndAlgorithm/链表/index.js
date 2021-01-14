// 单链表的插入、删除、查找
// 带有头结点的单链表

// 结点
class Node {
  constructor(element) {
    this.element = element // 数据
    this.next = null // 指针
  }
}

class LinkList {
  constructor() {
    this.head = new Node('head')
  }

  // 向链表末尾添加结点
  append(newElement) {
    const newNode = new Node(newElement)
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }

  // 根据元素值value查找结点
  findByValue(item) {
    let currentNode = this.head.next
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }

  // 根据index查找结点，下标从0开始
  findByIndex (index) {
    let currentNode = this.head.next
    let pos = 0
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }

  // 在指定元素后面插入
  insert(element, newElement) {
    const currentNode = this.findByValue(element)
    if (currentNode === -1) {
      console.log('未找到插入的位置')
      return
    }
    const newNode = new Node(newElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  // 查找前一个结点
  findPrev (item) {
    let currentNode = this.head 
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }
    if (currentNode.next === null) 
      return -1
    return currentNode
  }

  // 根据值删除
  remove (item) {
    const prevNode = this.findPrev(item)
    if (prevNode === -1) {
      console.log('未找到该元素')
      return 
    }
    prevNode.next = prevNode.next.next
  }

  // 遍历显示所有的结点
  display () {
    let currentNode = this.head.next // 忽略头指针的值
    while (currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }

}

const linkList = new LinkList()
console.log(linkList)
// LinkList { head: Node { element: 'head', next: null } }
linkList.append('apple')
linkList.append('banana')
linkList.append('pear')
linkList.append('potato')
linkList.display()
// apple
// banana
// pear
// potato
linkList.findByValue('banana')
// Node {
//   element: 'banana',
//   next: Node {
//     element: 'pear',
//     next: Node { element: 'potato', next: null }
//   }
// }
linkList.insert('banana', 'tomato')
linkList.display()
// apple
// banana
// tomato
// pear
// potato
linkList.findByIndex(2)
// Node {
//   element: 'tomato',
//   next: Node {
//     element: 'pear',
//     next: Node { element: 'potato', next: null }
//   }
// }
linkList.remove('pear')
linkList.display()
// apple
// banana
// tomato
// potato
linkList.remove('egg')
linkList.display()
// 未找到该元素
// apple
// banana
// tomato
// potato