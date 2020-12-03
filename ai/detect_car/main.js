const fs = require('fs');
const AipOcrClient = require('baidu-aip-sdk').ocr;

const APP_ID = "23088626";
const API_KEY = "aXH7i4P1WkghUKohtrEk0YPG";
const SECRET_KEY = "rCMQfXWor6uwA7mlMW3tPGTZhGx6g4AK";
// sync  I/O  Async 同步 
const image = fs.readFileSync("car_number.jpg").toString("base64");
// console.log(image);
const options = {};
options["multi_detect"] = "true";

const client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);

client.licensePlate(image, options).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
})