async function async1() {
    console.log('async1 start');
    await async2();
    // console.log('async1 end');
}

async function async2() {
    console.log('async2 start');
    return new Promise((resolve, reject) => {
     resolve();
     console.log('async2 promise');
    })
}

console.log('script start');
   
setTimeout(function() { // 宏任务队列
    console.log('setTimeout');
}, 0);  

async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve(); 
}).then(function() { // 微任务队列
    console.log('promise2');
}).then(function() { // 微任务队列
    console.log('promise3');
});
   
console.log('script end');