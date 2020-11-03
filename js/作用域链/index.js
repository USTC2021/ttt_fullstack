function test() {

}

// test.name  test.prototype
// test.[[scope]]  // 隐式属性，不能被拿出来使用

// test()  ---> AO:{}   // 回收

// GO: {
//     global: undefined 100
//     a: function() {...}
// }
function a() {
    function b() {
        var b = 222
    }
    var a = 111
    b()
    console.log(a)
}
var global = 100

// aAO: {
//     a: undefined 111
//     b: function() {...}
// }

// bAO: {
//     b: undefined 222
// }

a()

// 作用域角度分析
// a 被定义 a.[[scope]] ---> 0: GO:{}
// a 执行   a.[[scope]] ---> 0: aAO:{}  1: GO{}
// b 定义   a.[[scope]] ---> 0: aAO:{}  1: GO{}
// b 执行   a.[[scope]] ---> 0: bAO:{}  1: aAO{}  2: GO:{}

// b 执行完后 b的AO就要销毁
// 紧接着a执行完，AO被销毁
// 因为a的AO包含了b函数，当a的AO销毁时b函数会失效