// vue3.0 响应式原理
// vue2.0 默认递归，数组改变length属性是无效的，对象不存在的属性是不能被拦截的

let toProxy = new WeakMap() // 代理过的对象
let toRaw = new WeakSet() // 代理过的对象：原对象

function isObject(val) {
  return typeof val === 'object' && val !== null
}
function reactive(target) {
  // 创建响应式的对象
  return createReactiveObject(target)
}

function createReactiveObject(target) {
  if (!isObject(target)) { // 如果不是对象 就直接返回
    return target
  }

  let proxy = toProxy.get(target)
  if (proxy) {
    return proxy
  }

  let baseHandler = {
    get(target, key, receiver) {
      console.log('获取')
      let result = Reflect.get(target, key, receiver)
      // console.log(result)
      return isObject(result) ? reactive(result) : result // 递归多层代理
    },
    set(target, key, value, receiver) {
      console.log('设置');
      let hadkey = target.hasOwnProperty(key)
      let oldValue = target[key]
      if (!hadkey) {
        console.log('新增')
      } else if (oldValue !== value) {
        console.log('修改')
      }
      let res = Reflect.set(target, key, value, receiver);
      return res
    },
    deleteProperty(target, key) {
      let res = Reflect.deleteProperty(target, key)
      console.log('删除')
      return res
    } 
  }
  let observed = new Proxy(target, baseHandler)
  toProxy.set(target, observed)
  toRaw.add(observed, target)
  return observed
}

// let proxy = reactive({name: '大白'})
// // console.log(proxy.age)
// proxy.name
// proxy.name = '柯南'
// console.log(proxy.name)
// // delete proxy.name
// // console.log(proxy.name)

// let proxy = reactive({
//   name: '大白',
//   age: {
//     n: 18
//   }
// })
// proxy.sex = 'boy'
// proxy.age.n = 19
// console.log(proxy.age.n)
// console.log(proxy.sex)

// let proxy = reactive([1, 2, 3])
// proxy.push(4)
// console.log(proxy)

let obj = {
  name: {
    n: '大白'
  }
}
let proxy = reactive(obj)
reactive(obj)