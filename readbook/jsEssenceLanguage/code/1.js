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

// 函数调用模式
var sum = add(3, 4) // 7
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