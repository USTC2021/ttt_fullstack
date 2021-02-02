响应式数据更新
触发 watcher 观察者里面的回调 vm._update 函数，去通知页面更新
这个过程中vm._render() 生成新的 vnode 的
vm._update 就会带着新的 vnode 去触发 __path__ 过程 (虚拟 dom 和真实 dom 比较)

vn = {
  target: 'ul',
  children: [{
    {target: 'li', children: [{vnode: {text: '1'}}]},
    {target: 'li', children: [{vnode: {text: '2'}}]}
  }]
}

diff 存在的意义
提高框架的效率，降低性能的消耗（优化框架的性能）
提高节点的复用性

__path__ 过程：
1. 对比新旧节点是否是相同的节点  (isSameNode)
  - 不是相同节点 isSameNode = false，直接销毁旧的vnode，渲染新的vnode
  - 如果节点相同，要尽可能的做节点的复用
  - 如果新vnode是文字vnode，就直接调用浏览器的api替换文字  
  - 如果新的vnode有children，旧的vnode没有，直接addvnode新的子节点
  - 如果旧的vnode有children，新的vnode没有，直接removevnode旧的子节点

diff 核心比较:
  let oldStartIdx = 0 // 旧首节点
  let newStartIdx = 0 // 新首节点
  let oldEndIdx = oldCh.length - 1 // 旧尾节点
  let newEndIdx = newCh.length - 1 // 新尾节点

  function sameVnode(a, b) {
    return {
      a.key === b.key && {
        a.tag === b.tag && 
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      }
    }
  }