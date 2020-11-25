let b = {
    name: '大白'
}

function a(e, r) {
    console.log(e + r)
    console.log(this.name)
}

// a.apply(b, [1, 2])

Function.prototype.myapply = function(thisArg) {
    if (typeof this !== 'function') {
        throw new TypeError('error')
    }
    const args = arguments[1]
    console.log(args)
    
    const fn = Symbol('fn') // 防止fn这个单词被占用
    thisArg[fn] = this
    const res = thisArg[fn](...args)
    delete thisArg[fn]
    return res
}

a.myapply(b, [2, 2])