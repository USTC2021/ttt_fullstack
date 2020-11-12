// function a() {
//     setTimeout(() => {
//         console.log('aaaa')
//     }, 1000)
// }
// function b() {
//     console.log('bbbb')
// }
// a()
// b()

// function a() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('aaaa')
//         }, 1000)
//         resolve()
//     })
// }
// function b() {
//     console.log('bbbb')
// }
// a().then(b)

function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('你好')
            resolve()
        }, ms)
    })
}

// async 声明该函数内部可能存在异步情况
async function asyncPrint(value, ms) {
    await timeout(ms) // 阻塞后面的代码
    console.log(value) // 去到微任务队列
}

// console.log('ok')

asyncPrint('hello world', 1000)

console.log('ok')