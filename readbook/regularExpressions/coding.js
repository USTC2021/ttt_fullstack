// 常见的正则表达式实例

// // 1. 判断是否是一个有效的电话号码
// let str = '13807562276'
// let reg = new RegExp('1[3578]\\d{9}') // 匹配纯数字1次或多次
// console.log(reg.test(str)) // true
// str = '16794232379'
// console.log(reg.test(str)) // false

// // 2. 提取文本中的所有7位有效的号码
// let text = '文本内容，1234567，花费4564613元费用，来完成9745638个计划'
// let res = new RegExp('\\d{7}', 'g')
// while ((result = res.exec(text)) != null) {
//   console.log(result, res.lastIndex)
// }
// // 结果
// // [
// //   '1234567',
// //   index: 5,
// //   input: '文本内容，1234567，花费4564613元费用，来完成9745638个计划',
// //   groups: undefined
// // ] 12
// // [
// //   '4564613',
// //   index: 15,
// //   input: '文本内容，1234567，花费4564613元费用，来完成9745638个计划',
// //   groups: undefined
// // ] 22
// // [
// //   '9745638',
// //   index: 29,
// //   input: '文本内容，1234567，花费4564613元费用，来完成9745638个计划',
// //   groups: undefined
// // ] 36

// // 3. 用户名正则
// // 用户名，4 - 16 位(包括字母、数字、下划线、减号)
// const reg = /^[a-zA-Z0-9_-]{4,16}$/;
// console.log(reg.test('dabai')); // true

// // 4. 密码强度正则
// // 最少6位，最长16位，包括至少一个大写字母，一个小写字母，一个数字，一个特殊字符
// let reg = /^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?\(\)]).*$/;;
// console.log(reg.test('daBai2021*')) // true

// // 5. 整数正则
// // 正整数正则 负整数正则 整数正则
// let posReg = /^\d+$/, negReg = /^-\d+$/, intReg = /^-?\d+$/
// console.log(posReg.test('613'), negReg.test('-7946'), intReg.test('5463')) // true true true

// // 6. 数字正则
// // 正数正则 负数正则 数字正则
// // 数字可以是整数也可以是浮点数
// let posReg = /^\d*\.?\d+$/, negReg = /^-\d*\.?\d+$/, numReg = /^-?\d*\.?\d+$/
// console.log(posReg.test('56.12'), negReg.test('-78.16'), numReg.test('46123.56')) // true true true

// // 7. 邮箱email正则
// let reg = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
// console.log(reg.test('23233232@qq.com')) // true

// // 8. 身份证号正则
// let reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
// console.log(reg.test('11010519780603375X')) // true

// // 9. URL正则
// let reg = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
// console.log(reg.test('http://www.baidu.com')) // true

// // 10. IPv4地址正则
// let reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
// console.log(reg.test('192.168.47.26')) //true

// // 11. 十六进制颜色正则
// let reg = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
// console.log(reg.test('#fcfcfc'), reg.test('#fff')) // true true

// // 12. 日期正则
// // 简单判定
// let reg = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/
// console.log(reg.test('2021-01-08')) // true
// // 复杂判定
// let reg2 = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/
// console.log(reg2.test('2021-01-08')) // true

// // 13. QQ号码正则
// let reg = /^[1-9][0-9]{4,10}$/
// console.log(reg.test('56213147')) // true

// // 14. 微信号正则
// // 6-20位，以字母开头，包含字母、数字、减号、下划线
// let reg = /^[a-zA-Z]([a-zA-Z0-9-_]{5,19})+$/
// console.log(reg.test('dabai456_sh-2021')) // true

// // 15. 车牌号正则
// let reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
// console.log(reg.test('赣A56896')) // true

// 16. 包含中文正则
let reg = /[\u4E00-\u9FA5]/
console.log(reg.test('大白')) // true