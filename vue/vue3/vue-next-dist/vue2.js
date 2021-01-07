// // vue2.0 是如何实现响应式的
// // 数据改变了，视图就会更新
// // 响应式原理

// function observer(target) { // 观察者
//   if (typeof target !== 'object' && target == null) {
//     return target
//   }
//   for (let key in target) {
//     defineReactive(target, key, target[key])
//   }
// }

// function defineReactive(target, key, value) {
//   Object.defineProperty(target, key, {
//     get() {
//       return value
//     },
//     set(newValue) {
//       if (newValue !== value) {
//         updateView()
//         value = newValue
//       }
//     }
//   }) 
// }

// function updateView() {
//   console.log('更新视图')
// }

// // Object.defineProperty
// let data = {name: '大白'}
// observer(data)
// console.log(data.name)
// data.name = '柯南'
// console.log(data.name)



// vue2.0 是如何实现响应式的
// 数据改变了，视图就会更新

let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype);

// 重写数组方法 push shift unshift pop reserve
['push', 'shift', 'unshift'].forEach(method => {
  // 函数劫持，重写函数
  proto[method] = function() {
    updateView()
    oldArrayPrototype[method].call(this, ...arguments)
  }
});

function observer(target) { // 观察者
  if (typeof target !== 'object' || target == null) {
    return target
  }

  if (Array.isArray(target)) {
    // Object.setPrototypeOf(target, proto)
    target.__proto__ = proto
  }

  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

function defineReactive(target, key, value) {
  if (typeof value == 'object' && value !== null) {
    observer(value)
  }
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue !== value) {
        updateView()
        value = newValue
      }
    }
  })
}

function updateView() {
  console.log('更新视图');
}

// Object.defineProperty
let data = {
  name: 'wn',
  age: {
    n: 18
  },
  like: {
    a: {
      hb: 'eat'
    }
  },
  sex: 'boy',
  job: ['coder', 'driver']
}
observer(data)
// console.log(data.like.a.hb);
// data.name = 'cg'
// data.like.a.hb = 'running'
// console.log(data.like.a.hb);

data.job.push('teacher')
console.log(data.job);