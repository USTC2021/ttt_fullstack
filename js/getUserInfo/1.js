// es6 箭头函数
var getInfos = function (user) {
    return user.name + ", \u6027\u522B" + user.sex + ", \u5C31\u804C\u4E8E" + user.company;
    // return true
};
console.log(getInfos({ name: '大白', sex: '男', company: '微软' }));