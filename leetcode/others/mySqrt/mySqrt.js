/**
 * leetcode69. x 的平方根
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // return Math.floor(Math.sqrt(x))

  // 暴力法
  // if (x === 0 || x === 1)
  //   return x
  // for (let i = 1; i <= x / 2; i++) {
  //   if (i * i <= x && (i + 1) * (i + 1) > x) 
  //     return i
  // }

  // while(x >= 0)
  //   return (Math.sqrt(x) | 0)

  // while (x >= 0) 
  //   return ~~Math.sqrt(x)

  // 二分法
  if (x === 0 || x === 1) 
    return x
  let low = 1, high = x
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (mid * mid == x) {
      return mid
    } else if (mid * mid > x) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return high
}

let x = 2
console.log(mySqrt(x))