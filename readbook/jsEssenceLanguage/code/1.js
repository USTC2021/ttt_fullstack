//  函数的方法调用模式

var myObj = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1; // 三目运算符
    }
}
myObj.increment()
// document.writeln(myObj.value)  // 1
console.log(myObj.value)
myObj.increment(2)
// document.writeln(myObj.value)  // 3
console.log(myObj.value)