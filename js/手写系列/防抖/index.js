// 在一定的时间内，如果持续请求，就一直不执行，在规定的时间内没有第二次操作，才执行
// 节约资源

function debounce(fn, delay) {
    let timer = null

    return function() {

        let arg = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(arg)
        }, delay)

        // let context = this
        // let arg = arguments
        // clearTimeout(timer)
        // timer = setTimeout(function() {
        //     fn.apply(context, arg)
        // }, delay)

    }
}