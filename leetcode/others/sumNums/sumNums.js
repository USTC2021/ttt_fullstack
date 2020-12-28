/**
 * leetcode剑指 Offer 64. 求1+2+…+n
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
  // 平均计算
  return (1 + n) * n / 2

  // // 递归
  // if (n === 1) return n
  // n += sumNums(n-1)
  // return n
}

let n = 10000
console.log(sumNums(n))