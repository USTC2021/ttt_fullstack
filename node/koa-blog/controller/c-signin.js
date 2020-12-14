// exports 抛出对象
exports.postSigin = async ctx => {
  await ctx.render('signin', {
    session: ctx.session // 模版文件生效
  })
}