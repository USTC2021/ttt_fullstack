// instanceof 源码分析

let arr = []
// arr instanceof Array

function instance_of(L, R) {
    L = L.__proto__
    let O = R.prototype
    while (true) {
        if (L === null) return false
        if (O === L) return true
        L = L.__proto__ // Array.prototype.__proto__ == Object.prototype
    }
}

// instance_of(arr, Array)
console.log(instance_of(arr, Array))
console.log(instance_of(arr, Object))