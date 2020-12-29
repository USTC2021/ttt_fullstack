function a () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaaa')
      resolve('ok')
    }, 1000)
  })
}

function b () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bbbb')
    }, 500)
  })
}

function c () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('cccc')
    }, 100)
  })
}

a().then((res) => {
  console.log(res)
  b()
  return 'okkkk'
}).then((res) => {
  console.log(res)
  c()
})