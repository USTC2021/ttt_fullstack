// 基类
var Beverage = function () {

}
Beverage.prototype.boilWater = function () {
    console.log('把水煮沸')
}
// 冲泡 空的方法
Beverage.prototype.brew = function () {

}
// 冲泡 倒进杯子
Beverage.prototype.pureInCup = function () {

}
Beverage.prototype.addCondiments = function () {

}
Beverage.prototype.init = function () {
    this.boilWater() 
    this.brew()
    this.pureInCup()
    this.addCondiments()
}
var Coffee = function () {

}

// 模板模式 原型继承
// Coffee.prototype = Beverage.prototype.init()
Coffee.prototype = new Beverage()
Coffee.prototype.brew = function () {
    console.log('用沸水冲泡coffee')
}
Coffee.prototype.pourInCup = function () {
    console.log('把coffee倒进杯子')
}
Coffee.prototype.addCondiments = function () {
    console.log('加糖和牛奶')
}
var oneCoffee = new Coffee()
oneCoffee.init()