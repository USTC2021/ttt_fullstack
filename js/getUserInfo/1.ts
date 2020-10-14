// es6 箭头函数
const getInfos = (user:{name: string, sex: string, company: string}):string => {
    return `${user.name}, 性别${user.sex}, 就职于${user.company}`;
    // return true
}
console.log(getInfos({name: '大白', sex:'男', company: '微软'}))