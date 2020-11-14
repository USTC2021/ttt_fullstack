/**
 * LeetCode451. 根据字符出现频率排序
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    // 将字符串转换成数组
    var arr = s.split('')
    // console.log(arr)
    // var arrS = [], arrCount = []
    let mapS = new Map()
    arr.forEach((item, index) => {
        // console.log(item, index)
        // 查找map中是否存在该元素
        // var i = mapS.has(item)
        // 若不存在则将该元素及其个数以键值对的形式添加至map
        // 若存在则修改map中该元素的值
        if (!mapS.has(item)) {
            mapS.set(item, 1)
        } else {
            mapS.forEach(function (value, key, map) {
                // console.log(key, value)
                if (key == item) {
                    value += 1
                }
                mapS.set(key, value)
                // console.log(key, value)
            })
        }
        // console.log(mapS)
    })
    // console.log(mapS)
    // console.log(arrS, arrCount)
    // 将map转换成数组  
    // arrmap = Array.from(mapS)
    // console.log(arrmap)
    // 然后对其进行排序
    arrmap = Array.from(mapS).sort(function (a, b) {
        return b[1] - a[1]
    })
    // console.log(arrmap)
    // 将数组转换成map
    var resultMap = new Map(arrmap), resultArr = []
    // console.log(resultMap)
    resultMap.forEach(function (value, key, map) {
        // console.log(key, value)
        for (var j = 0; j < value; j++) {
            resultArr.push(key)
        }
    })
    // console.log(resultArr)
    // 将数组转换成字符串
    // return resultArr.toString().replace(/,/g,'') // 该方法存在字符串自带逗号时会被去除逗号
    return resultArr.join('')
}
var s = 'tree'
console.log(frequencySort(s)) // eert

var s = 'cccaaa'
console.log(frequencySort(s)) // cccaaa

var s = 'Aabb'
console.log(frequencySort(s)) // bbAa

var s = "Mymommaalwayssaid,\"Lifewaslikeaboxofchocolates.Youneverknowwhatyou'regonnaget."
console.log(frequencySort(s)) // aaaaaaaaaoooooooooeeeeeeennnnsssswwwwlllmmmiiitttyyy..hhffrrkkgguuccMvbL\"Y,x'd