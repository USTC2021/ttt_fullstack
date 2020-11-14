/**
 * LeetCode451. 根据字符出现频率排序
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    // 将字符串以键值对的形式存入map中
    var map = new Map(), result = ''
    // map 中 set(key, value)  向map中添加一个值
    // map 中 get(key)  通过key找到value
    for (let ans of s) {
        map.set(ans, (map.get(ans) || 0) + 1)
    }
    // console.log(map)
    // 对map以value值进行排序 将map转换成数组...map  然后对其进行排序 排序后转换成map
    map = new Map([...map].sort((a,b) => b[1] - a[1]))
    // console.log(map)
    // 将map中的对象以题目要求进行转化成字符串
    map.forEach(function (value, key, map) {
        for (var i = 0; i < value; i++) {
            result += key
        }
    })
    return result
}
var s = 'tree'
console.log(frequencySort(s)) // eert

var s = 'cccaaa'
console.log(frequencySort(s)) // cccaaa

var s = 'Aabb'
console.log(frequencySort(s)) // bbAa

var s = "Mymommaalwayssaid,\"Lifewaslikeaboxofchocolates.Youneverknowwhatyou'regonnaget."
console.log(frequencySort(s)) // aaaaaaaaaoooooooooeeeeeeennnnsssswwwwlllmmmiiitttyyy..hhffrrkkgguuccMvbL\"Y,x'd