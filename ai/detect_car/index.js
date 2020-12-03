const fs = require('fs');
const AipImageClassifyClient = require('baidu-aip-sdk').imageClassify;

const APP_ID = "23085907";
const API_KEY = "8GT1GqnhLyRFpZSn56ad3TPl";
const SECRET_KEY = "tqfGG0xBs7jGwYblazbmGsdYpIv7q7Vy";
// sync  I/O  Async 同步 
const image = fs.readFileSync("car.png").toString("base64");
// console.log(image);

const client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);

// http 协议
// 云端 AI sdk 
client.carDetect(image).then((result) => {
  console.log(result);
}).catch(err => {
  console.log(err);
})