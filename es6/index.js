// var foo 
// console.log(foo) // undefined
// foo = 'bar'

// var foo = 'bar' // 会声明提升

// console.log(foo) // 报错
// let foo = 'bar' // 不会声明提升

// const foo = 'bar'
// foo = 123 // 导致console.log报错
// console.log(foo) 

let example = 'Tom'
// const foo = 'this is' + example
const foo = `this is ${example}`
console.log(foo)