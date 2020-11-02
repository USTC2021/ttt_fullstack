function identify () {
    return this.name.toUpperCase()
}

function speak () {
    var greeting = "hello I am " + identify.call(this)
    console.log(greeting)
}

var me = {
    name: 'wn'
}

var you = {
    name: 'dabai'
}

speak.call(you)