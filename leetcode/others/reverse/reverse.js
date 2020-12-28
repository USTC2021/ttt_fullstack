/**
 * leetcode7. 整数反转
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // if (x === 0 || x === -0 || x > 2 ** 31 - 1 || x < -(2 ** 31)) return 0
  // // 先将数字转换成数组
  // x = x.toString().split('')
  // // console.log(x)
  // let result = []
  // if (x[0] === '-') {
  //   result.push(x[0])
  //   x = x.splice(1)
  // }
  // // 去除末尾0
  // for (let i = x.length - 1; i >= 0; i--) {
  //   if (x[i] !== '0') {
  //     x = x.splice(0, i + 1)
  //     break
  //   }
  // }
  // for (let i = x.length - 1; i >= 0; i--) {
  //   result.push(x[i])
  // }
  // let number = result.join('')
  // if (number > 2 ** 31 - 1 || number < -(2 ** 31)) return 0
  // return number

  // // 方法二
  // let result = Math.abs(x).toString().split('').reverse().join('')
  // // console.log(result)
  // if (x < 0) {
  //   return result <= 2 ** 31 ? -result : 0
  // } else {
  //   return result < 2 ** 31 ? result : 0
  // }

  // 方法三
  // 获取参数的绝对值并对绝对值进行取反
  let res = (Math.abs(x) + '').split('').reverse().join('')
  // 判断参数是否小于0，小于0添加符号位
  x < 0 && (res *= -1)
  // 判断是否益出
  if (res >= (2 ** 31 - 1) || res <= ((2 **31)* -1)) return 0
  // if (res >= (Math.pow(2, 31) - 1) || res <= (Math.pow(2, 31) * -1)) return 0
  return res
  // return parseInt(res)
}

let x = 123
console.log(reverse(x)) // 321

x = -123
console.log(reverse(x)) // -321

x = 1200
console.log(reverse(x)) // 21

x = 0
console.log(reverse(x)) // 0

x = -0
console.log(reverse(x)) // 0

x = 1231444444444444
console.log(reverse(x))

x = -1231444444444444
console.log(reverse(x))

x = 1534236469
console.log(reverse(x)) // 0

x = 102
console.log(reverse(x))