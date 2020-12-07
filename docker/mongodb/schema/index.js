// 数据库驱动 
const mongoose = require('mongoose');
// 将物理的数据存储转变成一个json对象
// schema 帮我们创建类，给我们api
// 只要看见schema就相当于看到了表结构
const Schema = mongoose.Schema;
const articleSchema = new Schema({
    title: String,
    date: Date,
    content: String
})

const linkSchema = new Schema({
  name: String,
  href: String,
  newPage: Boolean
})

const userSchame = new Schema({
  name: String,
  password: String,
  email: String,
  emailCode: String,
  createTime: Number,
  article: [articleSchema],
  links: [linkSchema]
})

const User = mongoose.model('User', userSchame);

new User({
  name: 'tmp',
  password: '0000',
  email: '2815313941@qq.com',
  emailCode: '12345',
  createTime: Date.now(),
  article: [],
  links: []
}).save(function () {

})

mongoose.connect('mongodb://127.0.0.1:27017/test');
const db = mongoose.connection;
db.on('error', function() {
  console.log('db error')
})
db.once('open', function(){ 
  console.log('db opened');
})