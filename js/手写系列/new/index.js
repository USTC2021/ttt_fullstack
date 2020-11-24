Person.prototype.say = function() {
    console.log('hahaha')
}
function Person(name, age) {
    this.name = name
    this.age = age
    // return {}
}

// let person = new Person('大白', 18)
// console.log(person) // 能继承say 但不会显示出来
// console.log(person.say()) // 原型上的属性给的是对象上的属性

function myNew() {
    let obj = {} 
    // 取到外部传入的构造器
    // arguments 类数组
    // console.log(arguments)
    let Constructor =  Array.prototype.shift.call(arguments)
    // 实现继承
    obj.__proto__ = Constructor.prototype

    let result = Constructor.apply(obj, arguments) // 所有属性去到obj里面

    return typeof result === 'object' ? result : obj
}

let person = myNew(Person, '大白', '18')
console.log(person)
person.say()