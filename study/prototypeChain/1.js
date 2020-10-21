function Food (name) {
    this.name = name
    this.eat = function () {
        console.log('eat')
    }
}
var food = new Food('banana')  // 实例化
// 原型链
console.log(food.__proto__) // Food {}
console.log(food.__proto__.__proto__) // {}
console.log(food.__proto__.__proto__.__proto__) // null

console.log(food.__proto__ === Food.prototype) // true
console.log(Food.prototype.isPrototypeOf(food)) // true

var res = food instanceof Food // 检查 food 是否为 Food 实例
console.log(res) // true

// 原型定义属性
Food.prototype.type = 'object named Food'
var foodRes = food.type // 实例继承的属性
console.log(foodRes) // object named Food

console.log(Food.prototype) // Food { type: 'object named Food' }