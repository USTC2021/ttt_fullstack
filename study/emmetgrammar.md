# 常用emmet语法

- 什么是emmet语法
    使用类似于 CSS 选择器的语法来描述生成的树和元素属性中的元素位置（快速构建html结构的快捷语法）

- 嵌套运算法
    1. 子代操作符：>
        例：div>div>p 表示div下有个子代div，子代div下有个p标签 
    2. 兄弟操作符：+
        例：div>div+p 表示div下有子代div和p标签，子代div和p标签属于同级
    3. 返回上级操作符：^
        例：div>div+p^div 表示一个div下有子代div和p标签和一个div标签，最后一个div与第一个div是同级的
    4. 乘法操作符：*
        例：ul>li*2 表示ul标签下有两个li子标签
    5. 分组操作符：()
        例：div>(header>ul>li*2>a)+footer>p 表示div下有header和footer两个同级标签，即包含两组

- 属性操作符
    1. id和class分别使用“#”和“.”表示，若是class属性不唯一时，可并列书写
        例：div#header>p.news*2 表示div有id为header，p标签有class为new
            div#header>p.news.new-tip 表示表示div有id为header，p标签有class为new和new-tip
    2. 定制属性：[]
        例：a[target='' title='hello world']*2
    3. 数值计算运算符：$（按一定的数字进行排列）
        例：div>ul>li.item-$*3 表示li的class有三个，分别为：item-1，item-2，item-3
            div>ul>li.item-$@3*3 表示li的class属性的数字从指定数字开始
    4. 本文操作符：{}
        例：div#news>p{Hello,World!} 表示p标签的内容是Hello,World