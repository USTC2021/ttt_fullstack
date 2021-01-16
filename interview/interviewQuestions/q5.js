// 变量提升
var name = 'word!';
(function() {
  // console.log(typeof name)
  if (typeof name === 'undefined') {
    var name = 'Jack'
    console.log('Goodbye ' + name)
  } else {
    console.log('Hello ' + name)
  }
})()

// Goodbye Jack

// 变量提升是js将声明移动至作用域的顶部
// var name = 'word!';
// (function() {
//   var name
//   if (typeof name === 'undefined') {
//     name = 'Jack'
//     console.log('Goodbye ' + name)
//   } else {
//     console.log('Hello ' + name)
//   }
// })()