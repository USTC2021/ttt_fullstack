/**
 * leetcode66. 加一
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0
    } else {
      digits[i]++
      return digits
    }
  }
  digits.unshift(1)
  return digits


  // const len = digits.length
  // for (let i = len - 1; i >= 0; i--) {
  //   digits[i]++
  //   digits[i] %= 10
  //   if (digits[i] != 0) return digits
  // }
  // // console.log(digits)
  // digits = [...Array(len + 1)].map(_=>0)
  // // console.log(digits)
  // digits[0] = 1
  // return digits
}

let digits = [1, 2, 3]
console.log(plusOne(digits))

digits = [4, 3, 2, 1]
console.log(plusOne(digits))

digits = [0]
console.log(plusOne(digits))

digits = [9]
console.log(plusOne(digits)) // [1, 0]

digits = [9, 9]
console.log(plusOne(digits)) // [1, 0, 0]

digits = [0, 0]
console.log(plusOne(digits)) // [0, 1]

digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
console.log(plusOne(digits)) // [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]