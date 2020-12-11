# javaScript语言精粹 
# 第六章 数组

- 数组：一段线性分配的内存，通过整数计算偏移并访问其元素  javascript没有该种数据结构
- javascript提供拥有类数组特性的对象

- 6.1 数组字面量
  - 数组字面量继承自Array.prototype，有length属性
  - 对象字面量继承自Object.prototype，无length属性

- 6.2 长度
  javaScript数组的length无上界

- 6.3 删除
  - javascript中数组就是对象
  - 移除元素 
    ```
      delete arr[2] // 数组中会遗留一个空洞(排在删除元素后的元素保留了他们最初的下标)
    ```
  - splice 方法
    删除一些元素并将它们替换成其他元素

- 6.4 枚举
  - for in
    - 可以遍历一个数组的所有属性
    - 无法保证属性的顺序

- 6.5 混淆的地方
  - 当属性名小而连续的整数时，使用数组，否则使用对象
  - 测试数组的步骤
    1. 判断其是否为真
    2. 判断其typeof结果是否为object
      数组、对象、null得到的为true
    3. 判断其是否有length属性
      数组得到的为true，对象并非如此
    4. 判断其是否包含splice方法
      数组得到的为true
    5. 判断length属性是否可以枚举 (for in遍历)
      数组得到的是false

- 6.6 方法
  - 数组的方法存储在Array.prototype中的函数里
  - Array.prototype可以被扩充
    ```给array增加一个方法 reduce方法 接收一个函数f和一个初始值value
      Array.method('reduce', function (f, value) {
        ...
      }) 
    ```

- 6.7 维度
  - 一个空矩阵的每个单元拥有一个初始值undefined
  - javascript没有多维数组
    ```javascript中二维数组
      Array.matrix = function (m, n, initial) {
        let a, i, j, mat = []
        for (i = 0; i < m; i++) {
          a = []
          for (j = 0; j < n; j++) {
            a[j] = 0
          }
          mat[i] = a
        }
        return mat
      }
      let myMatrix = Array.matrix(4, 4, 0)
    ```

## 本章难点(解答见其他文章)
  1. 数组字面量
  2. 复用方法 接收函数和变量
  3. 创建二维数组