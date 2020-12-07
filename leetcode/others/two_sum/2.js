/*
* @param {Array} nums 
* @param {integer} target 
* @return Array []
*/
const twoSum = function(nums,target){
    for(let i = 0; i < nums.length; i++){
        if(nums.indexOf(target-nums[i]) != -1){ //indexOf() 返回某个指定的字符串值在字符串中首次出现的位置
            let lastnum = nums.findIndex((s)=>s === (target-nums[i])); //findIndex() 返回传入一个测试条件符合条件的数组第一个元素位置
            if(i != lastnum)
                return [i, lastnum];
        }
    }
}
console.log(twoSum([2,7,11,15],9));