function identify (context) {
    return context.name.toUpperCase()
}

function speak (context) {
    var greeting = "hello I am " + identify(context)
    console.log(greeting)
}

var me = {
    name: 'wn'
}

var you = {
    name: 'dabai'
}

speak(me)