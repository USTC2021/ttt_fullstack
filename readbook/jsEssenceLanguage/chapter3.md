# javaScript语言精粹 
# 第三章 对象

- javaScript 数据类型
    1. 基础数据类型
        Number String Boolean Undefined Null Symbol(es6新增，表示独一无二的值)
        值不可变
        数据存储在栈(stack)区，占据空间小，大小固定，被频繁使用
    2. 引用数据类型
        Object Function Array 
        值是可变的
        同时保存在栈内存和堆内存，占据空间大，大小不固定，存储在堆内存，指向该引用数据类型的变量指针储存在栈内存

- 检验数据类型
    1. typeof
        (1) 返回一个表示数据类型的字符串  
        number boolean string symbol object undefined function
        (2) 不能判断array 和 null
        (3) 缺点 
            除 function 以外的对象都会被识别成 object
            解决方法 使用 instanceof 进行判断
    2. instanceof 
        (1) 检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上，即判断 A 是否是 B 的实例，若是，返回 true，否则返回 false
        A (object) instanceof B (constructor)
        (2) 缺点
            - 是否处于原型链上的判断方法不严谨
            - 无法判断字面量方式创建的基本数据类型
            - 无法检测 null 和 undefined
    3. constructor
        (1) 与 instanceof 相似，但检测 object 与 instanceof 不一样
        (2) 可以处理基本数据类型的检验
        (3) 缺点
            - 无法检验 null 和 undefined
            - 不稳定 在把类的原型进行重写过程中，可以会出现把之前的 constructor 给覆盖了，使得检验结果不准确
    4. object.prototype.toString.call()  最标准最常用(MDN)

- 对象
    数组、函数、正则表达式都是对象
    属性的容器
    属性  key: value
    无类别(class-free) 用于收集和管理数据
    可以包含其他对象
    允许继承另一对象的属性  可减少对象初始化的时间和内存消耗

- 3.1 对象字面量
    1. 定义  {} 中包含 0 或 多个 键值对(名/值)
    2. 属性名 标识符且不是保留字可不用引号括住属性名
        var stooge = {
            "first-name": 'Jerome', // 必须用引号括住
            "last-name": 'Howard'
        }
    3. 对象可嵌套
        var flight = {
            airline: "Oceanic",
            number: 815,
            departure: {
                IATA: "SYD",
                time: "2020-10-13 14:55",
                city: "Sydney"
            }
            arrival: {
                IATA: "LAX",
                time: "2020-10-14 10:42",
                city: "Los Angeles"
            }
        }

- 3.2 检索
    1. 检索对象中包含的值的方式  有引号的用 ["属性名"] 检索，没有的则用 "." 检索
        stooge["first-name"] 
        flight.departure.IATA
    2. 检索不存在的成员元素的值，返回undefined 
       检索undefined值会导致 typeError 异常   通过 && 运算符避免错误
        flight.equipment                             // undefined
        flight.equipment.model                       // throw "TypeError"
        flight.equipment && flight.equipment.model   // undefined
    3. || 运算符填充默认值
        var status = flight.status || "unknown"
        var middle = stooge["middle-name"] || "(none)"

- 3.2 更新
    
## 本章难点(解答见其他文章)
    1. javaScript 的数据类型和数据类型检验