# defineProperty 和 Proxy 的区别
defineProperty 只能定义属性的读 (get) 和写 (set)
Proxy 可以定义更多的行为，比如：in, delete ...
Proxy 可以代理的数据类型不仅是Object，还可以代理function，数组 ...

let proxy = new Proxy(target, handler)
target: 要拦截的目标对象
handler: 一个对象，用来定制拦截行为