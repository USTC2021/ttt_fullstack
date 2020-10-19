// take in js
// 一杯热coffee
// es5 类 大写的函数
// 1. 把水煮开
// 2. 用沸水冲泡coffee
// 3. 把coffee倒进杯子
// 4. 加糖和牛奶
// constructor
// 类 抽象的
// 实例化 对象
// 封装类的
var Coffee = function (type) {
    // {}
    // this.type = '猫屎coffee'
    this.type = type
}
// 原型
Coffee.prototype.boilWater = function () {
    console.log('把水煮开')
}
Coffee.prototype.brewCoffeeGriends = function () {
    console.log('用沸水冲泡coffee')
}
Coffee.prototype.pureInCup = function () {
    console.log('把coffee倒进杯子')
}
Coffee.prototype.addSugarAndMilk = function () {
    console.log('加糖和牛奶')
}

Coffee.prototype.init = function () {
    this.boilWater()
    this.brewCoffeeGriends()
    this.pureInCup()
    this.addSugarAndMilk()
}

var oneCoffee = new Coffee('猫屎coffee')
// oneCoffee.boilWater()
// oneCoffee.brewCoffeeGriends()
// oneCoffee.pureInCup()
// oneCoffee.addSugarAndMilk()
console.log(oneCoffee.type)
console.log(oneCoffee.__proto__ == Coffee.prototype)
oneCoffee.init()
// class
// js 类 怎么构建起来的 = 火车头 函数(首字母大写) + 好多节车厢 prototype
// 构造函数和普通函数的区别是 new
// 函数是一等对象
// console.log()
// js 本没有类，只有对象 new {}
// 任何函数都有一个prototype属性
console.log(Coffee.prototype.constructor == Coffee)
// 原型链
// {} 原型对象object
console.log(Coffee.prototype.__proto__) // {}
console.log(Coffee.prototype.__proto__.__proto__) // null