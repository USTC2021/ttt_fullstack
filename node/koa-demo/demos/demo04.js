const Koa = require('koa');
const fa = require('fs')
const app = new Koa()

const main = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./template.html')
}

app.use(main)

app.listen(3000, () => {
    console.log('3000端口已启动')
})