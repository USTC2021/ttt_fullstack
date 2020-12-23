# 如何实现前端路由
- 如何改变url却不引起页面的刷新
- 如何检测到url地址变了
1. url 改变不引起页面刷新 ---------- 改变url后面的hash值不会引起页面刷新(url的#后面的值)
2. 如何检测url的变化 ---------- 监听hash值的变化，通过hash值中的change事件

# hash实现
  - 改变url的操作：
    1. 浏览器的前进和后退按钮
    2. <a></a>
    3. window.location

# history 实现
pushState 和 replaceState 改变url的path部分 但不引起页面的刷新

popstate事件


# 基于vue实现vue-router