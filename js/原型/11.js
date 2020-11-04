Person.prototype.name = '蜗牛'
Person.prototype.say = function() {
    console.log('哈哈哈')
}
function Person(name) {

}

var person = new Person()
console.log(person.name) // 蜗牛

// 它定义了构造函数制造出来的对象的公共祖先
var person1 = new Person()
console.log(person1.name) // undefined

person.say()