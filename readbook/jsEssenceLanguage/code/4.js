Function.method('bind', function (that) {
  let method = this
  let slice = Array.prototype.slice
  let args = slice.apply(arguments, [1])
  return function () {
    return method.apply(that, args.concat(slice.apply(arguments, [0])))
  }
})

let x = function () {
  return this.value
}.bind({value: 666})

alert(x()) // 666 