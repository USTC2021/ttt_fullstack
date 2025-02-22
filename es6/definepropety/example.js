// let obj = {}, value = null
// Object.defineProperty(obj, 'num', {
//   get: function() {
//     console.log('执行get操作')
//     return value
//   },
//   set: function(newValue) {
//     console.log('执行set操作')
//     value = newValue
//   }
// })

// obj.num = 2
// console.log(obj.num)


// let obj = {}, value = null
// Object.defineProperty(obj, 'num', {
//   get: function() {
//     console.log('执行get操作')
//     return value
//   },
//   // set: function(newValue) {
//   //   console.log('执行set操作')
//   //   value = newValue
//   // }
// })

// obj.num = 2
// console.log(obj.num)


// let obj = {}, value = null
// Object.defineProperty(obj, 'num', {})

// obj.num = 2
// console.log(obj.num)



function Archiver() {
  let value = null
  let archive = []
  Object.defineProperty(this, 'num', {
    get: function () {
      console.log('执行get操作')
      return value
    },
    set: function (newValue) {
      console.log('执行set操作')
      value = newValue
      archive.push({ val: newValue})
    }
  })

  this.getArchive = function() {
    return archive
  }
}

let arc = new Archiver()
arc.num // get
arc.num = 11 // set
arc.num = 22 // set
console.log(arc.getArchive()) // [{val: 11}, {val: 22}]