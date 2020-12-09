import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

// state.count = 2
// 主动修改数据源数据
// 默认是同步的
const mutations = {
  add (state, num) {
    // state.count++
    // state.count += 5
    // state.count += num
    setTimeout(() => {
      state.count += num
    }, 3000)
    console.log('我后出现')
  },
  reduce (state) {
    state.count--
  }
}

const getters = {
  newCount: (state) => {
    return state.count ** 2
  }
}

// 不主动修改数据源数据
// 代码提交的搬运工
// 异步代码
// 自动到任务队列里面
// 提高代码的并行
const actions = {
  addAction (context, n) { // context 代表 vuex
    // context.commit('add', n)
    setTimeout(() => {
      context.commit('add', n)
    }, 3000)
    console.log('我先出现')
  }
}

const moduleA = {
  state,
  mutations,
  getters,
  actions
}

const state2 = {
  state,
  mutations,
  actions
}

const moduleB = {
  state2
}

export default new Vuex.Store({
  // state,
  // mutations,
  // getters,
  // actions
  modules: {
    a: moduleA,
    b: moduleB
  }
})