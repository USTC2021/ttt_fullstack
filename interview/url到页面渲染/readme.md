<!-- 上 -->
# 定位
IP协议 => DNS 解析

<!-- 下 -->
# 浏览器接收到html文件
1. 词法分析 => 标记 => node结构 => Dom树

# 浏览器接收到css文件
步骤同上 => CSSOM树
递归CSSOM树确定具体的元素到底是什么样式

# 渲染树
Dom树 + CSSOM树 = render(渲染)树
渲染树只包含需要显示的节点

# 回流
根据render树绘制页面布局

# 为什么操作Dom性能很差？
- 本身浏览器存在渲染引擎和js执行引擎，当存在用js操作Dom的时候，那么这时候就会造成渲染引擎和js执行引擎的共同工作，那么也就是多线程并发工作，那么也就造成了性能地开销过大 (造成多线程通信)
- 操作dom结构还会带来重绘和回流的情况 (可能引起重绘和回流)

# 什么情况下会堵塞渲染
html，css
<script src=""></script>

# 重绘和回流
重绘：节点更改不影响布局信息
回流：节点的几何信息发生变化
回流一定会重绘，重绘不一定会回流
回流所需要的成本比重绘高得多

会导致性能问题的操作(会造成回流的操作)：
1. 改变window大小 
2. 改变字体大小 
3. display: none
4. offset+ 引发回流，例如 offsetTop

# 减少重绘和回流
1. 用visibility 代替 display: none
2. 不要把节点的属性值放在一个循环里面当成循环的变量
for (let i = 0; i < 1000; i++) {
  console.log(document.querySelector('test').style.offsetTop)
}
3. 尽量不要用table布局