function test() {
    var arr = []
    for(var i = 0; i < 10; i++) {
        // console.log(i)
        arr[i] = function() {
            console.log(i)
        }
    }
    return arr
}

// test() // 不会执行

var myArr = test()
for(var j = 0; j < 10; j++) {
    myArr[j]()
}