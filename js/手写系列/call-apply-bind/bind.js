let b = {
    name: '大白'
}

function a(e, r) {
    this.sex = 'boy'
    console.log(e + r)
    console.log(this.name)
}

// let res = a.bind(b, 1, 2)
// res()

Function.prototype.mybind = function(thisArg) {
    if (typeof this !== 'function') {
        throw new TypeError('error')
    }
    const args = [...arguments].slice(1) 
    const self = this
    const nop = function() {}
    // const fn = Array.prototype.shift.call(arguments)
    // 绑定函数
    const bound = function() {
        return self.apply(
            this instanceof nop ? this : thisArg,
            args
        ) // 拿到b，返回a的执行结果
    }
    if (this.prototype) {
        nop.prototype = this.prototype
    }

    bound.prototype = new nop()

    return bound
}

let res = a.mybind(b, 2, 2)
let newA = new res()
console.log(newA)