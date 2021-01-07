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
// 直接修改数组的length属性是不会触发视图更新的
// data.job.length = 4
console.log(data.job);

// vue2中响应式的原理如何实现
// 首先，vue2官方标准的响应式数据是模式对象，其原因是vue2中的响应式的实现
// 借用了js中的Object.defineProperty()这个方法做对象属性的拦截，从而驱使了
// 只要数据源中的数据发生变化了，我们都具备一个set方法去获取到数据源中的数据
// 变更的最新值，并且同时我们还可以去触发视图更新的逻辑执行
// 然后呢？因为Object.defineProperty()它只能做一层对象的拦截，那么当数据源中
// 遇到对象里嵌套对象的情况下，那么源码当中使用递归的手段来实现的，因为递归的
// 性能不是很好，vue3里面重写换了一种方式去写
// 当我们在数据源中使用数组的话，而Object.defineProperty()是无法监听拦截数组的，
// 做不了数组的数据劫持，官方的手段是将数组上的全部方法做一个重写的操作，也就是
// 我们在项目中对数组进行push shift unshift pop reserve等一系列操作，其实这些
// 方法都是已经被源码当中重写的方法，然后数组中重写的方法之后又把重写的这些方法交给
// 了数据源的隐式原型上，也就是设置原型Object.setPrototypeOf()