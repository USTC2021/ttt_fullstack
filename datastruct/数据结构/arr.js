// const arr = [1, 2, 3, 4]

// const arr = new Array()
// const arr = []

// const arr = new Array(7)
// console.log(arr)

// const arr = new Array(7).fill(1)
// console.log(arr)

// const arr = [
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]

// fill的入参 如果是引用类型，那么在填充值的时候就是入参的引用
// const arr = (new Array(7)).fill([])
// arr[0][0] = 1
// console.log(arr)


const arr = []
const len = arr.length
for (let i = 0; i < len; i++) {
  arr[i] = []
}