// 带头结点的单链表 插入、删除、查找

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkList {

  // 带头结点
  constructor() {
    this.head = new Node('head')
  }

  // 向链表尾部添加
  append(element) {
    // 创建新的结点
    let newNode = new Node(element)
    // 头结点
    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }

  findByValue (item) {
    let currentNode = this.head.next
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next 
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }

  // 在指定元素后插入
  insert (element, newElement) {
    // 查找指定元素的结点
    let currentNode = this.findByValue(element)
    // 若找不到指定元素的结点
    if (currentNode === -1) {
      console.log('找不到要插入的指定元素的位置')
      return
    }
    // 找到指定元素的结点
    // 创建新的结点
    let newNode = new Node(newElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  // 根据下标index查找结点，从0开始
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

  // 查找指定元素的前一个元素结点
  findPrev (item) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }
    if (currentNode.next === null) {
      return -1
    }
    return currentNode
  }

  // 删除指定元素
  remove (item) {
    // 查找指定元素的前一个元素结点
    let prevNode = this.findPrev(item)
    // console.log(currentNode)
    if (prevNode === -1) {
      console.log('不存在指定元素')
      return
    }
    // 删除指定元素
    prevNode.next = prevNode.next.next
  }

  // 遍历显示链表结点
  display() {
    let currentNode = this.head.next // 忽略头结点
    while (currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }

}

let linkList = new LinkList()
console.log(linkList)
// LinkList { head: Node { element: 'head', next: null } }

// 向链表尾部添加
linkList.append('computer')
linkList.append('pencil')
linkList.append('water')
linkList.append('milk')
linkList.display()
// computer
// pencil
// water
// milk

// 在指定元素后插入
linkList.insert('pencil', 'mobilephone') 
linkList.display()

// 根据下标index查找结点，从0开始
linkList.findByIndex(2) 
linkList.findByIndex(6) 

// 删除指定元素
linkList.remove('sugar')
linkList.display()

linkList.remove('water')
linkList.display()