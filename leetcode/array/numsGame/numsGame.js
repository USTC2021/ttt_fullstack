/**
 * LeetCodeLCP 24. 数字游戏
 * @param {number[]} nums
 * @return {number[]}
 */
var numsGame = function(nums) {
    var result = [], count = 0, resNum = [].concat(nums), resCount = 0, midNum = [].concat(nums), midCount = 0, resultArr = []
    if (nums.length == 1) 
        return result.push(0)
    for (var i = 0; i < nums.length; i++) {
        var startnum = nums[i] - i
        // console.log(nums[i], startnum)
        for (var j = 0; j < i + 1; j++) {
            // 从前往后增加
            if (j == 0) {
                result.push(0)
            } 
            if (nums[0] + j != nums[j])
                count += Math.abs(nums[0] + j - nums[j])

            // 从后往前减少
            resNum[0] = startnum
            // console.log(resNum)
            if (resNum[0] + j != nums[j])
                resCount += Math.abs(resNum[0] + j - nums[j])
        }

        var arr = [].concat(nums).splice(0, i + 1).sort((a, b) => a - b)
        var index = Math.floor(i / 2)
        // console.log(index * 2)
        // 从中间
        if (i % 2 == 0) {
            // midNum[0] = arr[Math.floor(i / 2)] - Math.floor(i / 2)
            if (i == 0) {
                midNum[0] = nums[0]
            } else {
                var mid1 = arr[index + 1] - index + 1
                var mid2 = nums[index + 1] - index - 1
                midNum[0] = Math.min(mid1, mid2)
            }
            // console.log(midNum[0], i)
            for (var k = 0; k < i + 1; k++) {
                if(midNum[0] + k != nums[k])
                    midCount += Math.abs(midNum[0] + k - nums[k])
            }
            // var num = Math.min(count, resCount, midCount) % 1000000007
            // // console.log(num)
            // resultArr.push(num)
        } else {
            // console.log(i)
            // var arr = [].concat(nums).splice(0, i + 1).sort((a, b) => a - b)
            // var index = Math.floor(i / 2)
            // midNum[0] = arr[index] - index
            var mid1 = arr[index] - index
            var mid2 = arr[index+1] - index - 1
            // if (i > 1) {
            //     midNum[0] = (mid1 + mid2) / 2
            // } else {
            //     midNum[0] = Math.min(mid1, mid2)    
            // }
            midNum[0] = (mid1 + mid2) / 2
            // midNum[0] = Math.min(mid1, mid2)
            // midNum[0] = (mid1 + mid2) / 2
            // console.log(midNum[0], mid)
            for (var k = 0; k < i + 1; k++) {
                if(midNum[0] + k != nums[k])
                    midCount += Math.abs(midNum[0] + k - nums[k])
            }
            // var num = Math.min(count, resCount) % 1000000007
            // resultArr.push(num)
        }
        var num = Math.min(count, resCount, midCount) % 1000000007
        resultArr.push(num)
        // console.log(Math.floor(i / 2), midNum)
        console.log(i, count, resCount, midCount)
        count = 0
        resCount = 0
        midCount = 0
    }
    return resultArr
}

// var nums = [3, 4, 5, 1, 6, 7] // [ 0, 0, 0, 5, 6, 7 ]
// console.log(numsGame(nums))

// var nums = [1, 2, 3, 4, 5]
// console.log(numsGame(nums)) // [ 0, 0, 0, 0, 0 ]

// var nums = [1, 1, 1, 2, 3, 4]
// console.log(numsGame(nums)) // [0, 1, 2, 3, 3, 3]

var nums = [471,626,848,957,788,138,982,721,729,956,432,1000,478,353,586,544,304,811,359,535,992,684,606,39,384,799,120,608,540,914,19,62,410,711,449,370,263,890,124,516,861,936,729,595,768,929,649,803,65,692,548,620,871,785,15,629,251,764,973,484,172,923,859,29,297,215,436,74,762,885,272,504,307,998,83,329,520,889,584,496,443,802,180,322,640,290,292,403,11,230,743,183,600,741,558,780,970,777,288]
console.log(numsGame(nums))