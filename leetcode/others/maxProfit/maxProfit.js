/**
 * leetcode121. 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // // 暴力法
  // let result = []
  // for (let i = 0; i < prices.length - 1; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     if (prices[i] < prices[j]) {
  //       result.push(prices[j] - prices[i])
  //     }
  //   }
  // }
  // // console.log(result)
  // // let max = Math.max.apply(null, result)
  // // console.log(max)
  // // return result.length === 0 ? 0 : Math.max.apply(null, result)
  // return result.length === 0 ? 0 : Math.max(...result)


  let maxprofit = 0
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        maxprofit = Math.max(maxprofit, prices[j] - prices[i])
      }
    }
  }
  return maxprofit
}

let prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))

prices = [7, 6, 4, 3, 1]
console.log(maxProfit(prices))