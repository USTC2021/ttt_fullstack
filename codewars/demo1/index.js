// function generateHashTagCapitalString (str) {
//     // 1. 是否为空 .length == 0 null ""!
//     // 2. 是否超过140字 .length
//     // 3. #  # +
//     // 4. 每个单词都大写

//     // if (str.split('').length < 140 && str.split('').length != 0){
//     //     // map() es6中数组的新方法，遍历数组的每一项，并用一个函数处理，返回新的数组
//     //     console.log('#' + str.split(' ').map(function(word) {
//     //         console.log(word)
//     //         return word.charAt(0).toUpperCase() + word.slice(1)
//     //     }).join(' '))
//     // } else {
//     //     return false
//     // }

//     return str.length > 140 || str == '' ? false : '#' + str.split(' ').map(function(word) {
//         // console.log(word)
//         return word.charAt(0).toUpperCase() + word.slice(1)
//     }).join(' ')
// }

function generateCapitalStringWithHashTag (str) {
    return str.length > 140 || str === '' ? false : '#' +str.split(' ').map(capitalize).join(' ')
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() +str.slice(1)
}

generateHashTagCapitalString('hello world')
// console.log(generateHashTagCapitalString('hello world'))