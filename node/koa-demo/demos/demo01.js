// 启动服务
const Koa = require('koa');

const app = new Koa()

app.listen(3000, () => {
    console.log('success')
})