<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/admin">Admin</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  mounted () {
    fetch('http://127.0.0.1:3000/api/v1')
    .then(data =>data.json())
    .then(data =>{
      console.log(data);
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
