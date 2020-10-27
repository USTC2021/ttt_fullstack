[1365. 有多少小于当前数字的数字](https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/)

- 读题
    array  nums = [8,1,2,2,3]
    nums[i] 与 除num[i]之外的元素进行比较 
    统计比nums[i]小的数字个数
    return array 

- 解题
    1. 方法一 暴力 时间复杂度 O(n^2)
        - 定义一个数组存放统计结果result，一个变量统计个数count
        - 嵌套循环，依次比较每个元素与数组的所有元素的大小
        - 若该元素大于数组中比较的元素，统计个数count+1
        - 每个元素与数组中所有元素比较完，将count的值存入返回结果的数组result中
        - 嵌套循环结束后，返回统计数组result

    2. 方法二 数组方法使用  千万要注意数组不能随意赋值，否则相关数组也会受其影响  js数组中没有array.sort() 方法
        - 对传入数组nums是否为空进行判断
        - 将数组nums复制给一个新的数组copyNums，注意不能直接复制，否则会受到原数组改变的影响
            var copyNums = Array.from(nums)
        - 将传入数组nums进行排序
            var sortedNums = nums.sort(function (a, b) {
                return a - b // 升序排列
            })
        - 一重循环获取需要比较的元素copyNums[i]，判断其是否为0，若为0，则返回个数数组result赋值为0，否则则在数组sortedNums中查找与之匹配的元素，返回其下标(该下标就是数组nums中比该元素小的元素的个数)，并存入返回个数数组result中
            result[i] = sortedNums.indexOf(copyNums[i])
        - 循环结束，返回数组result

    3. 方法三 快速排序

    4. 方法四 桶排序

    5. 哈希 + 前缀和

    6. 快速排序 + 二分查找