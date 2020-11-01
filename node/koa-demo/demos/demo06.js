const Koa = require('koa');
const router = require('koa-router')
const app = new Koa()

const main = ctx => {
    ctx.response.body = 'hello world'
}

const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">about</a>'
}

// app.use(main)

app.use(router.get('/about', about))
app.use(router.get('/', main))

app.listen(3000, () => {
    console.log('3000端口已启动')
})