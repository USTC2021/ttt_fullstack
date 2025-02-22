//  函数的方法调用模式
var myObj = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1; // 三目运算符
    }
}
myObj.increment()
// document.writeln(myObj.value)  // 1
// console.log(myObj.value)
myObj.increment(2)
// document.writeln(myObj.value)  // 3
// console.log(myObj.value)

var add = function (a, b) {
    return a + b
}

// 函数调用模式 设计模式错误
// var sum = add(3, 4) // 7

// 设计模式错误修正
// myObj.twoNumberAdd = function () {
//     var that = this
//     var addHelper = function () {
//          that.value = add(3, 4)
//          var sum = that
//     }
//     addHelper()
// }

// myObj.twoNumberAdd() // undefined
// console.log(myObj.value) // 7

// 函数调用模式 设计模式正确
// 定义一个 that，在 helper 函数调用前，把 this 赋值给that，再调用时 this 指向 double
// 若不定义 that 的话， helper 函数的 this 指向全局对象
myObj.double = function () {
    var that = this 
    // console.log(that)  // 1 3
    
    // console.log(that.value)
    var helper = function (){
        // console.log(that.value)  // 3
        that.value = add(that.value, that.value)
    }

    helper() // 以函数的形式调用 helper
    // console.log(helper()) // undefined
}

// 以方法的形式调用 double
myObj.double() // undefined
console.log(myObj.value) // 6

// 构造器调用模式
var Quo = function (string) {  // 构造函数
    this.status = string
}

Quo.prototype.get_status = function () {  // 方法
    return this.status
}

// 一个函数带上 new 调用，那么将创建一个连接到该函数 的 prototype 成员的新对象，同时 this 也会绑定到这个新对象上
var myQuo = new Quo("confused")  // 创建实例，this 绑定到 myQuo
console.log(myQuo.get_status())  // confused

// apply调用模式
var array = [5, 4]
var sum = add.apply(null, array)
console.log(sum) // 9

var statusObj = {
    status: 'A-ok'
} 

var status = Quo.prototype.get_status.apply(statusObj)
console.log(status) // A-ok

// 参数
var arrSum = function () {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(arrSum(4, 8, 15, 16, 23, 42)) // 108


// 异常
var numAdd = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {  // 抛出一个 exception 对象，传递到 catch 从句
            name: 'typeError',
            message: 'add needs numbers'
        };
    }
    return a + b
}

var try_it = function () {
    try { // 抛出一个异常，控制权跳到它的 catch 从句
        numAdd('seven')
    } catch (e) {
        console.log(e.name + ': ' + e.message)
    }
}

try_it()  // typeError: add needs numbers

// 递归 汉若塔问题
var hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux)
        console.log('move disc ' + disc + ' from ' + src + ' to ' + dst)
        hanoi(disc - 1, aux, src, dst)
    }
}
hanoi(3, 'src', 'aux', 'dst')
// 结果
// move disc 1 from src to dst
// move disc 2 from src to aux
// move disc 1 from dst to aux
// move disc 3 from src to dst
// move disc 1 from aux to src
// move disc 2 from aux to dst
// move disc 1 from src to dst

// 闭包
var quo = function (status) {  
    return {
        get_status: function () {
            return status
        }
    }
}

// 返回包含 get_status 方法的一个新对象
// 该对象的一个引用保存在 myQuo 中
// 即使 quo 已经返回，get_status 方法仍然享有访问 quo 对象 status 属性的特权
// get_status 方法不是访问该参数的一个拷贝，其访问的就是该参数本身
var myQuo = quo("amazed")  
console.log(myQuo.get_status())  // amazed