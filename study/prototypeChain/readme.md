# 原型和原型链

- 任何函数都有prototype属性 原型对象
- 任何的实例化后的对象都有__proto__ 私有属性
- 对象的__proto__ = 构造函数的prototype对象

- Constructor 构造函数 （Person)
    一般为了区别普通函数首字母大写

- prototype 原型(Person.prototype)
    原型指的就是一个对象，实例"继承"那个对象的属性
    在原型上定义的属性，通过"继承"，实例也拥有了这个属性
    "继承"是在new操作符内部实现的

- 构造函数与原型关系
    构造函数内部有一个prototype属性，通过该属性能访问到原型
    Person是构造函数，Person.prototype就是原型

- instance 实例(person)
    有了构造函数，在原型上创建可以"继承"的属性，并通过new操作符创建实例

- 原型与实例关系
    事例：构造函数Person，使用new操作符创建一个实例person，通过instanceof检查他们之间的关系
    person instanceof Person  // 检查person是否为Person的实例

- proto 隐式原型(person.__proto__)
    实例通过__proto__这个属性访问到原型
    person.__proto__ === Person.prototype

- constructor(原型的一个属性)与构造函数的关系
    Person.prototype.constructor === Person

- 原型、实例、构造函数之间的关系
    person.__proto__.constructor === Person

- 原型链
    javaScript 对象是动态的属性“包”（指其自己的属性）。javaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。
    原型通过__proto__访问到原型的原型
    事例：有个构造函数Person，然后有个继承"前者"的构造函数People，然后通过new操作符得到实例p，当p访问一个非自有属性时，通过__proto__作为桥梁连接起来的一系列原型、原型的原型、原型的原型的原型直到Object构造函数为止，这个搜索的过程形成的链状关系就是原型链

- hasOwnProperty 是 javaScript 中唯一一个处理属性并且不会遍历原型链的方法。
  Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致。

- 扩展原型链的四种方法
    1. New-initialization 
        该方法非常快，符合标准，充分利用JIT优化(初始化过程中，构造函数存储的每个对象生成的唯一信息只生成一次，可能会将不需要的方法放在对象上)
    2. Object.create
        允许一次性直接设置__proto__属性，允许通过Object.create(null)创建一个没有原型的对象(当以对象格式处理成百上千的对象描述的时候，可能造成严重性能问题)
    3. Object.setPrototypeOf
        允许动态操作对象的原型，能强制给通过创建出来的没有原型的对象天界一个原型(弃用)
    4. __proto__
        设置非对象的值会静默失败，并不会抛出错误(抛弃该方法)