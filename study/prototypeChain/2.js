function Food (name) {
    this.name = name
    this.eat = function () {
        console.log('eat')
    }
}
var food = new Food('banana')  // 实例化
console.log(Food.prototype) // prototype属性指向原型对象Food {} 
console.log(food.eat()) // eat