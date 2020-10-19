const Koa = require('koa')

const app = new Koa()
// 数据传递到客户端
const main = (ctx) => {
    ctx.response.body = 'hello world'
}

app.use(main)

app.listen(3000, () => {
    console.log('success')
})