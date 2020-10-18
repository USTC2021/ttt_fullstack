# javaScript语言精粹 
# 第四章 函数

- 函数  用于指定对象的行为
    一组语句 
    javascript 基础模块单元 
    作用： 代码复用  信息隐藏 组合调用

- javaScript 中 Math 对象
    1. Math.ceil()  返回大于或等于一个给定数字的最小整数(向上取整)
        console.log(Math.ceil(6.6)); // 7
    2. Math.floor()  返回小于或等于一个给定数字的最大整数(向下取整)
        console.log(Math.floor(6.6)); // 6
    3. Math.max() 返回一组数中的最大值
        console.log(Math.max(1, 2, 3)); // 3
        // 在数组中应用
        console.log(Math.max.apply(null, [1, 2, 3])); // 3 // 利用了apply的传参特性
        console.log(Math.max(...[1, 2, 3])); // 3 // 利用了 ES6 Spread 操作符
    4. Math.min() 返回零个或多个数值的最小值 与 Math.max() 函数一样使用
    5. Math.random() 返回一个 0 到小于 1 的浮点数
    6. Math.round() 返回一个数字四舍五入后最接近的整数
    7. Math.sqrt()  返回一个数的平方根

- 4.1 函数对象
    1. 对象  "名/值"对集合 拥有一个连到原型对象的隐藏连接
    2. 对象字面量的对象 连接 object.prototype
       函数对象 连接 Function.prototype (该原型对象连接object.prototype)
    3. 函数创建时的两个隐藏属性
        函数上下文
        实现函数行为的代码
    4. 函数对象创建时 拥有 prototype 属性 与隐藏连接 Function.prototype 不同
        值(函数对象) 拥有 constructor 属性 

- 4.2 函数字面量
    1. 包括四个部分： function  函数名(省略为匿名函数)  (参数)  {语句}
    2. 闭包(javaScript表现力的根基) 
        通过函数字面量创建的函数对象包含一个连到外部上下文的连接

- 4.3 调用
    1. 函数调用时除接收声明定义的形参外还接收 this 和 arguments 两个参数
        (1) this 值取决于调用的模式
        (2) 实参个数与形参不匹配  不会导致运行时错误
            实参过多 超出参数值被忽略
            实参过少 缺失值被 undefined 替代
            参数值不会进行类型检验 
    2. javascript 调用模式
        (1) 方法调用模式
            方法  函数被保存为对象一个属性
            var myObj = {
                value: 0,
                increment: function (inc) {
                    this.value += typeof inc === 'number' ? inc : 1;
                }
            }
            myObj.increment()
            document.writeln(myObj.value)  // 1
            myObj.increment(2)
            document.writeln(myObj.value)  // 3
        (2) 函数调用模式
            - 当一个函数不是当做方法使用，而是被当做函数来使用时，其 this 指向全局对象，由此我们就需要定义一个变量并把它赋值为 this，否则就无法实现所需要的功能
            - 内部函数中的this仍然指向的是全局对象，即window。这里普遍被认为是JavaScript语言的设计错误，因为没有人想让内部函数中的this指向全局对象。一般的处理方式是将this作为变量保存下来，一般约定为that或者self

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

        (3) 构造器调用模式
            javaScript 基于原型继承的语言 可继承属性 无类别的

            var Quo = function (string) {  // 构造函数
                this.status = string
            }

            Quo.prototype.get_status = function () {  // 方法
                return this.status
            }

            // 一个函数带上 new 调用，那么将创建一个连接到该函数 的 prototype 成员的新对象，同时 this 也会绑定到这个新对象上
            var myQuo = new Quo("confused")  // 创建实例，this 绑定到 myQuo
            console.log(myQuo.get_status())  // confused

        (4) apply调用模式
            javascript 函数式面向对象编程语言 函数有方法
            apply 方法  构建一个参数数组，调用函数
                        接收两个参数 第一个是将被绑定给 this 的值 第二个是参数数组

            var array = [5, 4]
            var sum = add.apply(null, array)
            console.log(sum) // 9

        四种模式的区别：  初始化关键参数 this 上存在差异

- 4.4 参数
    1. 函数被调用时会得到一个参数   arguments 数组(函数可访问它被调用时传递的给它的参数列表)
    2. 语言的一个设计错误  
        arguments 并不是一个真正的数组 "类似数组(array-like)"对象
                  拥有属性 但缺少所有数组方法

- 4.5 返回
    1. return语句 执行时函数返回不再执行余下语句
    2. 函数若没有指定返回值则返回undefined
    3. 函数以前缀加 new 的方式调用则返回 this(该新对象)

- 4.6 异常
    异常   干扰程序正常流程的非正常的事故
    一个 try 语句只会有一个将捕获所有异常的 catch 代码块

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

- 4.7 给类型增加方法
    通过给 Function.prorotype 增加方法来使得该方法对所有函数可用
    Function.prototype.method

- 4.8 递归
    javascript 不提供尾递归优化，深度递归函数可能会因为返回堆栈溢出而运行失败

    // 汉若塔问题
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

- 4.9 作用域
    控制着变量与参数的可见性和生命周期 减少名称冲突 提供自动内存管理
    C语言语法的语言 块级作用域
    javaScript 拥有函数作用域(定义在函数中的参数和变量在函数外部是不可见的，在一个函数中的任何位置定义的变量在函数中的任何地方都是可见的)
    好处：内部函数可以访问定义它们外部函数的参数和变量(除 this 和 arguments)

- 4.10 闭包
    内部函数拥有比它的外部函数更长的生命周期
    闭包：函数可以访问它被创建时所处的上下文环境  内部函数能访问外部函数的实际变量而无需复制

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

- 4.11 回调
    用于异步请求，提供一个当服务器响应到达时被调用的函数 客户端不会被堵塞

- 4.12 模块
    1. 模块 由函数和闭包构建 一个提供接口却隐藏状态与实现的函数或对象
    2. 模块模式一般形式
        - 一个定义私有变量和函数的函数
        - 利用闭包创建可以访问私有变量和函数的特权函数
        - 返回特权函数或把它们保存到一个可访问到的地方

- 4.13 级联
    一些设置或修改对象的某个状态不返回任何值的方法，若使其返回 this，就需要启用级联的方式
    一个级联中可以在一条语句中依次调用同一个对象的很多方法

- 4.14 套用
    将函数与传递给它的参数相结合去产生出一个新的函数
    var add = add.curry(1)
    function.method('curry', function () {
        
    })

## 本章难点(解答见其他文章)
    1. 闭包
    2. javascript 调用模式 (函数调用模式、Apply调用模式)
    3. javascript 关键字 this
    4. 作用域 
    5. 模块