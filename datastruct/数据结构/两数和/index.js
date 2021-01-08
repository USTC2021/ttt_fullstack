// 给定一个整数数组nums和一个目标值target，在该数组中找出和为target的两个整数，并返回它们的下标

nums = [2, 7, 11, 15]
let target = 9
// [0, 1]

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === target - nums[j]) {
//         return [i, j]
//       }
//     }
//   }
// }

// var twoSum=function (nums,target){
//   const map=new Map()
//   for(let i=0;i<nums.length;i++){
//       let n=nums[i]
//       let n2= target-nums[i]
//       if(map.has(n2)){
//         return [map.get(n2),i]
//       }else{
//           map.set(n,i)
//       }
//   }
// }

// var twoSum = function (nums, target) {
//   const diffs = {} 
//   const len = nums.length

//   for (let i = 0; i < len; i++) {
//     if (diffs[target - nums[i]] !== undefined) {
//       return [diffs[target - nums[i]], i]
//     }
//     diffs[nums[i]] = i
//   }
// }