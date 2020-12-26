Object.defineProperty(obj, prop, descriptor)

obj: 要被监听的那个对象
prop: 要定义或修改的属性名称
descriptor: 将被定义或修改的属性的描述符  不可以不写，无值写成{}

只能出现数据描述符或者存取描述符，不能同时出现两者