[860. 柠檬水找零](https://leetcode-cn.com/problems/lemonade-change/)

- 读题
   lemonade $5
   付 5 10 20
   找钱
   一开始没有零钱
   是否正确找零
   return boolean (true/false)
   
- 解题
   - 定义两个变量，分别记录5元和10元的张数
   - 先判断第一个元素是否大于5，若大于5，则返回false
   - 遍历数组
      - 先判断元素是否为5，若为5，则变量five++
      - 然后判断元素是否为10，若为10，先判断five值是否为0，若为0，则返回false，否则five--,ten++
      - 最后判断元素是否为20，若为20
         - 先判断five是否大于0，并且ten是否大于0，若是，则five--，ten--
         - 若不是，则判断five是否大于等于三，若是，则five -= 3
         - 若不是，则返回false
   - 遍历结束，返回true