// 提取共有属性
Car.prototype.name = 'BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400

// Car.prototype = {
//     name: 'BMW',
//     lang: 4900,
//     height: 1400
// }

function Car(color, owner) {
    this.color = color
    this.owner = owner
    // this.name = 'BMW'
    // this.lang = 4900
    // this.height = 1400
}

var car = new Car('red', '大白')
var car1 = new Car('green', '柯南')

console.log(car.name)
console.log(car1)