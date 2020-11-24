// 测试驱动开发 TDD

import Queue from "../lib/Queue";

const names = ['大白', '柯南', '哪吒', '静香', '小矮人', '白雪公主']
// const result = hotPotato(names, 9)

const queue = new Queue()
queue.enqueue("队列中的第一条数据")
queue.enqueue("队列中的第二条数据")
queue.enqueue("队列中的第三条数据")
queue.enqueue("队列中的第四条数据")
queue.enqueue("队列中的第五条数据")

queue.dequeue();
console.log(queue.size());
console.log(queue.toString());
console.log(queue.isEmpty());