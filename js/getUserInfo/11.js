const cfw = {
    name: '哆唻爱梦',
    company: '百度',
    sex: '男'
}

console.log(`${cfw.name}, 性别${cfw.sex}, 就职于${cfw.company}`)
const yds = {
    name: '柯南',
    company: '滴滴',
    sex: '男'
}
console.log(`${yds.name}, 性别${yds.sex}, 就职于${yds.company}`)

// 功能重复了，函数  功能的封装

function getUserInfo(user){
    if (!user) {
        return
    }
    console.log(`${user.name}, 性别${user.sex}, 就职于${user.company}`)
}

getUserInfo(yds)
getUserInfo()
getUserInfo({name: '大白', company: '微软'})