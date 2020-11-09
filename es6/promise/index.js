// js是单线程语言

function a() {
    setTimeout(() => {
        console.log('蜗牛')
    }, 1000)
}

function b() {
    console.log('柯南')
}

function c() {
    console.log('大白')
}

c()
a()
b()