# html分类
块级
- 独占一行
- 能设置宽高

行内
- 都在一行上面
- 不能设置宽高 (错误)
- 行内非置换元素不能设置宽高
- 行内置换元素能设置宽高

img -> 行内 -> 能设置宽高

置换元素：
内部内容不受 css 控制
```html
<img src="" /> src决定
<canvas></canvas> 300*xxx
<input />
<iframe src=""></iframe> 300*xxx
<script src=""></script>
```

非置换元素：
```html
<div>
    <div></div>
</div>
<span>文字</span>
```