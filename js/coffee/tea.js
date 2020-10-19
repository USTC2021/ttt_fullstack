// 1. 把水煮开
// 2. 用沸水浸泡茶叶
// 3. 把茶水倒进杯子
// 4. 加柠檬
var Tea = function () {

}
var Tea = function (type) {
    this.type = type
}
Tea.prototype.boilWater = function () {
    console.log('把水煮开')
}
Tea.prototype.brewTea = function () {
    console.log('用沸水浸泡茶叶')
}
Tea.prototype.pureCup = function () {
    console.log('把茶水倒进杯子')
}
Tea.prototype.addjuick = function () {
    console.log('加柠檬')
}
Tea.prototype.init = function () {
    this.boilWater()
    this.brewTea()
    this.pureCup()
    this.addjuick()
}
var oneTea = new Tea()
oneTea.init()
var twoTea = new Tea('铁观音')
console.log(twoTea.type)
twoTea.init()