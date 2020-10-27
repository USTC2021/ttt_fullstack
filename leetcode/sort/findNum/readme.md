[剑指 Offer 53 - I. 在排序数组中查找数字 I](https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/)

- 读题
    number[] nums  sorted
    number target
    return count

- 解题
    1. 暴力
    - 判断已排好序的数组首元素是否大于target，若大于则返回次数count=0
    - 遍历数组，查找是否存在元素与target值相等，若相等则次数count++，若遍历到的元素大于target时，跳出循环
    - 最后返回次数count

    2. 函数使用
    - 判断已排好序的数组首元素是否大于target，若大于则返回次数count=0
    - 查找数组中是否存在与target的值相等的元素，返回其第一个出现该值的下标
        var i = nums.indexOf(target)
    - 若该下标大于等于0时，从该元素开始遍历，若数组元素大于target值，则跳出循环，否则计数count++
    - 最后返回次数count

    3. 充分利用函数与判断
    - 判断已排好序的数组首元素是否大于target，若大于则返回次数count=0
    - 查找数组中是否存在与target的值相等的元素，返回其第一个出现该值的下标
    - 当数组存在与target值相等的元素时，查询数组值比target值大的元素的位置，若存在该元素时，次数count=比target值大的下标-第一个与target值相等的下标，若不存在，则返回-1
    - 当查询数组值比target值大的元素不存在时，若数组第一个元素与target值相等，则返回数组长度，否则则返回数组长度-第一个出现与target值相等的元素的下标


    ## 注意
        多角度思考问题 全面化