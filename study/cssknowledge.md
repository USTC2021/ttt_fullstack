# css基本知识点

- 什么是css？
    1. css指层叠样式表
    2. 样式定义如何显示html
    3. 样式通常存储在样式表中
    4. 把样式添加到html 4.0中，为了解决内容与表现分离的问题
    5. 外部样式表可以极大提高工作效率
    6. 外部样式表通常存储在css文件中
    7. 多个样式定义可层叠为一个

- css规则
    主要由选择器和一条或多条声明组成
    选择器：需要改变样式的html元素
    声明：属性和值组成

- id和class选择器
    不要以数字开头，数字开头的id在Mozilla/Firefox浏览器中不起作用

- 如何插入样式表
    1. 外部样式表
    2. 内部样式表
    3. 内联样式

- 多重样式优先级
    (内联样式)inline style > (内部样式)internal style sheet > (外部样式)external style sheet > 浏览器默认样式
    如果外部样式放在内部样式的后面，外部样式将覆盖内部样式

-  css选择器
    id选择器 类选择器 伪类选择器 属性选择器 伪元素选择器 通配选择器 标签选择器

- 选择器优先级
    通用选择器 < 元素(类型)选择器 < 类选择器 < 属性选择器 < 伪类 < id选择器 < 内联样式
    
- 权重计算
    1. 内联样式表权值：1000
    2. id选择器的权值：100
    3. class类选择器的权值：10
    4. html标签选择器的权值：1
    
- css优先级法则
    1. 选择器都有一个权值，权值越大越优先
    2. 当权值相等时，后出现的样式表设置要优于先出现的样式表设置
    3. 网页设置的css样式优先权高于浏览器所设置的样式
    4. 继承的css样式不如后来指定的css样式
    5. 在同一组属性设置中标有"!important"规则的优先级最大

- 颜色值表示方式
    1. 十六进制
    2. RGB
    3. 颜色名称

- css背景属性——background-attachment(背景图像是否固定)
    1. scroll 随着页面滚动 默认
    2. fixed 固定
    3. local 随元素内容滚动
    4. initial 设置该属性的默认值
    5. inherit 指定background-attachment的设置应该从父元素继承

- css文本属性
    1. color 文本颜色
    2. letter-spacing 字符间距(字母之间)
    3. line-height 行高
    4. text-align 对齐元素中的文本
        left right center justify(两端对齐文本效果)
    5. text-decoration 文本添加修饰
        none underline overline(定义文本上一条线) line-through(线穿过文本) blink(定义闪烁的文本)
        - text-decoration-line
        - text-decoration-color
        - text-decoration-style
    6. text-indent 缩进元素中文本的首行
    7. text-shadow 文本阴影
        h-shadow(必需，水平阴影的位置)
        v-shadow(必需，垂直阴影的位置)
    8. text-transform 控制元素中的字母
        none capitalize(文本中每个单词以大写字母开头) uooercase(大写字母) lowercase(小写字母)
    9. vertical-align 元素垂直对齐
    10. word-spacing 字间距(单词之间)

- css字体属性
    1. font-family 字体系列
    2. font-size 字体大小
    3. font-style 字体样式
        normal italic(斜体) oblique(倾斜) 
    4. font-weight 字体粗细