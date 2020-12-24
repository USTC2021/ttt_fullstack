// let str = 'babel'
// let func = s => {
//   document.getElementById('app').innerHTML = `hello ${s}`
// }
// func(str)


// document.getElementById('app').innerHTML = 'hello webpack'
// document.getElementById('app').addEventListener('click', function () {
//   console.log(123)
// })

// document.getElementById('app').addEventListener('click', () => {
//   console.log(123)
// })


import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// new Vue({
//   el: "#app",
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')