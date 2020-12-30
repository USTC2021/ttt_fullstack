// 原型链的继承

// function Parent() {
//   this.name = '大白'
// }

// Parent.prototype.getName = function() {
//   console.log(this.name)
// }

// function Child() {

// }

// Child.prototype = new Parent()
// let child = new Child()
// child.getName()



// function Parent() {
//   this.names = ['大白', '柯南']
// }

// function Child() {

// }

// Child.prototype = new Parent()
// let child = new Child()
// console.log(child)


function Parent() {
  this.names = ['大白', '柯南']
}

function Child() {

}

Child.prototype = new Parent()
let child = new Child()
child.names.push('多来爱梦')
console.log(child)