// set不允许其内的数据结构存在重复项

// let arr = [1, 2, 3, 2, 4, 1]
// // 数组去重
// let newArr = [...new Set(arr)] // [1, 2, 3, 4]


// function test(color) {
//     switch(color) {
//         case 'red':
//             return ['apple', 'strawberry']
//         case 'yellow':
//             return ['banana', 'pear']
//         case 'green':
//             return ['watermelon']
//         default:
//             return []
//     }
// }

// console.log(test('yellow'))

// const fruitColor = {
//     red: ['apple', 'strawberry'],
//     yellow: ['banana', 'pear'],
//     green: ['watermelon']
// }
// function test(color) {
//     return fruitColor[color] || []
// }

// console.log(test('yellow'))

// let obj = new Map()  
// let a = 1
// obj.set(a, 123)
// console.log(obj.get(a)) // 123

const fruitColor = new Map().set('red', ['apple', 'strawberry']).set('yellow', ['banana', 'pear']).set('green', ['watermelon'])

function test(color) {
    return fruitColor.get(color)
}
console.log(test('yellow'))

