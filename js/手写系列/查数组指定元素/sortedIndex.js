// 一个数组排好序，插入一个元素，返回该元素插入的下标
// 二分查找

// iteratee作用域不会被更改
function cb(func, context) {
  if (context === void 0) return func;
  return function() {
    return func.apply(context, arguments)
  }
}

// function sortedIndex (array, obj) {
//   let low = 0; high = array.length
//   while (low < high) {
//     let mid = Math.floor((low + high) / 2)
//     if (array[mid] < obj) low = mid + 1
//     else high = mid
//   }
//   return high
// }


function sortedIndex(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context)

  let low = 0, high = array.length-1;

  while(low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (iteratee(array[mid]) < iteratee(obj)) low = mid + 1
    else if (iteratee(array[mid]) == iteratee(obj)) {
      return mid
    }
    else high = mid - 1
  }

  return low
}


// console.log(sortedIndex([10, 20, 30], 25));
// sortedIndex([10, 20, 30], 25) // 2



var stooges = [{name: 'moe', age: 40},{name: 'larry', age: 50}, {name: 'curly', age: 60}];
let result = sortedIndex(stooges, {name: 'larry', age: 40}, function(stooge) {
  return stooge.age
});
console.log(result); // 1