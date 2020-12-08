# 全栈目录结构
  - 前台  Vue
    - 用户端 vue
    - 管理后台 react + antd
  - api后端 服务器端 node + java

vue create ---fronted 前端  8080
express ---backend 后端  3000
mongodb 27017

前端 生命周期 mounted
axios
-> api 向后端进行通信
http://localhost:8000-> :3000 跨域  (考题)


- 后端接口先调通
  localhost:3000/users/:dabai
  {
    name: 'dabai',
    sex: '男'
  }
  ^/api/v1(版本)/users/:dabai
  1. url 响应 /api/
    加路由 /api/v1/
    app.use(启用路由)
  2. 返回json
  3. postman 模拟请求
  4. 前端请求
  5. 跨域不只是域名不同，端口和协议不一样也算跨域
  6. App.all 后端配置解决的

- 基于 mongodb 数据流 -> MVC node (express)
  -> vue 界面
  1. model 层的构建
    这是一个精简版的model层  model目录有了
    index.js 所有的模型定义在这里
    mongoose.Schema 根据数据库结构定义生成类
  2. postman 测试一下数据
    - 路由