var a = {
    user: '蜗牛',
    fn: function(q, w) {
        console.log(this.user)
        console.log(q + w)
    }
}
var b = a.fn
// call和apply传参方式有差别，apply使用数组方式传参，call和apply返回的是结果
b.call(a, 2, 3)
b.call(null) // 强行指向window
b.apply(a, [12, 32]) // 数组传参
b.bind(a) // 返回函数
// bind 返回的是函数，传参方式与call一样
var c = b.bind(a, 2, 3)
c()

var c = b.bind(a)
c(2, 3)
// 就近原则
var c = b.bind(a, 2, 5)
c(8, 9) // 输出7