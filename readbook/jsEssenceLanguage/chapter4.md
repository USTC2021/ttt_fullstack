# javaScript语言精粹 
# 第四章 函数

- 函数  用于指定对象的行为
    一组语句 
    javascript 基础模块单元 
    作用： 代码复用  信息隐藏 组合调用

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
            当一个函数不是当做方法使用，而是被当做函数来使用时，其 this 指向全局对象，由此我们就需要定义一个变量并把它赋值为 this，否则就无法实现所需要的功能

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

## 本章难点(解答见其他文章)
    1. 闭包
    2. javascript 调用模式 (函数调用模式、Apply调用模式)
    3. javascript 关键字 this