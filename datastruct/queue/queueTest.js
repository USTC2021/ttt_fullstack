"use strict";
// 测试驱动开发 TDD
exports.__esModule = true;
var Queue_1 = require("../lib/Queue");
var names = ['大白', '柯南', '哪吒', '静香', '小矮人', '白雪公主'];
// const result = hotPotato(names, 9)
var queue = new Queue_1["default"]();
queue.enqueue("队列中的第一条数据");
queue.enqueue("队列中的第二条数据");
queue.enqueue("队列中的第三条数据");
queue.enqueue("队列中的第四条数据");
queue.enqueue("队列中的第五条数据");
queue.dequeue();
console.log(queue.size());
console.log(queue.toString());
console.log(queue.isEmpty());
