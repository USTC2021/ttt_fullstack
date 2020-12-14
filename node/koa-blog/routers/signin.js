const router = require('koa-router')();
const controller = require('../controller/c-signin')

// router.post('/signin', (ctx) => {
//   // 展示登录界面
//   ctx.body = 'signin'
// })

router.get('/signin', controller.postSigin)

module.exports = router