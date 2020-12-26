// @annotation 
// class MyClass {

// }

// function annotation(target) {
//   target.annotated = true
// }

// @decorator
// class A {}
// // 等同于
// class A {}
// A = decorator(A) || A

// 装饰器只能装饰类和类的方法
// 不能用于某个函数
class MyClass {
  @readonly
  @unenumerable
  method () {

  }
}

function readonly(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

function unenumerable(target, name, descriptor) {
  descriptor.enumerable = false
  return descriptor
}