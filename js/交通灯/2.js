const fs  = require("fs");
const { resolve } = require("path");
// fs.readFile('./1.html', 'utf8', (err, file) => {
//     console.log(file)
// })

// let p = new Promise((resolve, reject) => {
//     resolve()
// })

// p.then(() => {
//     fs.readFile('./1.html', 'utf8', (err, file) => {
//         console.log(file)
//     })
// }).catch(() => {
//     console.log('失败')
// })

// 包装一层 promise
let p = (url) => new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', (err, file) => {
        if (err) {
            reject()
        } else {
            resolve(file)
        }
    })
})

// p('./1.html').then((file) => {
//     console.log('file', file)
// })
// p('2.js').then(f => {
//     console.log('f', f)
// })

p('./1.html').then((c1) => {
    return p3('2.js')
}).then((c2) => {
    
})