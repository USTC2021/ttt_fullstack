数据库 存储服务

www  web 服务 3000
mongodb  27017
mysql 3306

全栈
: 8080 vue 前端  npm run start
webpack webpack-dev-server
vue-router

: 3000 后端 node + go
：27017  数据库服务
MVC

1. 启动mongodb  进程
  mongod --dbpath 'e:/data/db'
  NOSQL   、test/a.bson
  关系型数据库
  mongo 数据库交互命令行

## mongo 的交互语句
  - show dbs;
  - use tutorial;
  - mysql 要去建表？
    mongodb 直接用
    前端非常友好
    给个json 它就存储了 没有太严格的关系定义 字段可有可无 没有那么严格
    物联网时代以及碎片化信息的收集
  - db.users.insert({username: '大白'});
    collection
  - show collections;
  - db.users.find();
  - db.users.find({"username: '大白'"});
  - db.users.drop();
  - show collections;
  - db.users.insert({username: 'smith'});
  - db.users.insert({username: 'jones'});
  - db.users.find().pretty();
  - find()
    $and
    ObjectId("")
    - db.users.find({_id: ObjectId("5fce1fe61ab35c9eeef877a3")})
    - db.users.find({$and: [{_id: ObjectId("5fce1fe61ab35c9eeef877a3")},
  {username: 'mike' }]});
  - update()
    - db.users.update({username: 'mike'},{$set: {country: "canda"} });
    - db.users.find().pretty();
  - 索引 (重点)
    - for (i = 0; i < 20000; i++) { db.numbers.save({num:i})}
    - db.numbers.count();
    - db.numbers.find({num:500}).explain("executionStats"); // 检测查询性能
    mysql 关系型数据库、mongodb Nosql 都有学习 对js特别友好，json存就可以
    索引进行过学习
    nums 20000条json  num:i
    nums:500
    创建number的索引
    db.numbers.createIndex({num:1});

  - 电商应用
    node Mongodb

  - 数据怎么进入数据库的
    - 先连接
      mongodb url once('open')
    - 对数据库建模
      userSchema 字段名 + 类型
      mongoose.model('User', userSchema)
      new User.save()