function a() {
    function b() {
        var bbb = 234
        console.log(aaa)
    }
    var aaa = 123
    return b
}
var global = 100
var demo = a()
demo()