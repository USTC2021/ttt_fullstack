const koa  = require('koa');
// const Router = require('koa-router')
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose')
const config = require('./config')

const app = new koa()
// const router = new Router()

// 建立MongoDB的连接
mongoose.connect(config.db, {useNewUrlParser: true}, (err) => {
  if (err) {
    console.log('failed')
  } else {
    console.log('connecting database successfully')
  }
})

app.use(cors()); // 解决跨域
app.use(bodyParser()); // 帮助koa解析参数

// app.use((ctx) => {
//   ctx.body = 'hello'
// })

const user_router = require('./routes/api/user_router')
app.use(user_router.routes())

// router.get('/login', (ctx) => {
//   ctx.body = 'login page'
// })

app.listen(3000)