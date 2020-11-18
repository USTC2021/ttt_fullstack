/**
 * LeetCodeLCP 18. 早餐组合
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */

// 超时
// var breakfastNumber = function(staple, drinks, x) {
//     var count = 0
//     for (var i = 0; i < staple.length; i++) {
//         for (var j = 0; j < drinks.length; j++) {
//             if (staple[i] + drinks[j] <= x)
//                 count++
//         }
//     }
//     count = count % (1e9 + 7)
//     return count
// }


// 超时
// var breakfastNumber = function(staple, drinks, x) {
//     var count = 0
//     drinks.sort((a, b) => a - b)
//     // console.log(drinks)
//     for (var i = 0; i < staple.length; i++) {
//         // 除去主食剩余多少
//         var rest = x - staple[i]
//         drinks.filter(val => {
//             if (val <= rest)
//                 count++
//         })
//     }
//     count = count % (1e9 + 7)
//     return count
// }

var breakfastNumber = function(staple, drinks, x) {
    var count = 0, i = 0, j = drinks.length - 1
    drinks.sort((a, b) => a - b)
    staple.sort((a, b) => a - b)
    // console.log(staple, drinks)
    while(i < staple.length && j >= 0) {
        if (staple[i] > x) 
            i++
        if (staple[i] + drinks[j] > x)
            j--
        if (staple[i] + drinks[j] <= x) {
            count += j + 1
            i++
        }
    }
    count = count % (1e9 + 7)
    return count
}

var staple = [10, 20, 5], drinks = [5, 5, 2], x = 15
console.log(breakfastNumber(staple, drinks, x))

var staple = [2, 1, 1], drinks = [8, 9, 5, 1], x = 9
console.log(breakfastNumber(staple, drinks, x))