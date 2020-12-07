<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    // fetch('http://localhost:3000/api/v1').then(data => {
    //   console.log(data)
    // }).catch(err => {
    //   console.log(err)
    // })
    fetch('http://localhost:3000/api/v1').then(data => data.json()).then(data =>{
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
