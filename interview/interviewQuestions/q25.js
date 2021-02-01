function foo() {}
var oldName = foo.name
foo.name = 'bar'
[oldName, foo.name] // foo foo
console.log(oldName) // foo
// 函数名是禁止被修改的