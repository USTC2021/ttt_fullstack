<template>
  <div class="home">
    这是home页面{{$route.params.id}}
    <!-- 这是home页面{{$route.query.id}} -->
    <p>
      <router-link to="/home1">首页1</router-link> |
      <router-link to="/home2">首页2</router-link> 
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>