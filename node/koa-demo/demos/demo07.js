const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

// app.use((ctx, next) => {
//   console.log(ctx.request);
//   ctx.body = 'hello';
// })

const main = (ctx, next) => {
  // console.log(ctx.request);
  ctx.body = 'hello'
}

// app.use(main)
// 使用路由
app.use(route.get('/abc'), main)

app.listen(3000)