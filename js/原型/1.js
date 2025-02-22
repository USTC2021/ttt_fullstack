// Person.prototype   -----原型
// console.log(Person.prototype)  // 函数被定义出来的那一刻就一定具备prototype属性
function Person(name) {
    this.name = name
}

// var person = new Person()
// console.log(person) // Person { name: undefined }

var person = new Person('蜗牛')
console.log(person.name) // 蜗牛

// 它定义了构造函数制造出来的对象的公共祖先
var person1 = new Person()
console.log(person1.name) // undefined