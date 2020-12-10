/**
 * leetcode860. 柠檬水找零
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0, ten = 0
  if (bills[0] > 5)
    return false
  for (let i = 0; i < bills.length; i++) {
    // console.log(bills[i])
    if (bills[i] === 5) {
      five++
    } else if (bills[i] === 10) {
      if (five === 0)
        return false
      five--
      ten++
    } else {
      if (five > 0 && ten > 0) {
        ten--
        five--
      } else if (five >= 3) {
        five -= 3
      } else {
        return false
      }
    }
    // console.log(five, ten)
  }
  return true
}

// let bills = [5, 5, 5, 10, 20]
// console.log(lemonadeChange(bills)) // true

// let bills = [5, 5, 10]
// console.log(lemonadeChange(bills)) // true

// let bills = [10, 10]
// console.log(lemonadeChange(bills)) // false

let bills = [5, 5, 10, 10, 20]
console.log(lemonadeChange(bills)) // false